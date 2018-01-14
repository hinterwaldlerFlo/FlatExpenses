using FlatExpenses.DbModels;
using FlatExpenses.IRepository;
using FlatExpenses.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlatExpenses.Repository
{
    public class BalanceRepository : IBalanceRepository
    {
        private readonly DbContext _context = null;

        private IInvoiceRepository invoiceRepository = null;

        public BalanceRepository(IOptions<Settings> settings, IInvoiceRepository invoiceRepository)
        {
            _context = new DbContext(settings);
            this.invoiceRepository = invoiceRepository;
        }

        public async Task<IEnumerable<Balance>> Get(DateTime fromDate, DateTime toDate)
        {
            return await _context.Balances
                .Find(x => (x.StartDate >= fromDate && x.EndDate <= toDate))
                .ToListAsync();
        }

        public async Task Add(Balance balance)
        {
            await _context.Balances.InsertOneAsync(balance);
        }

        public async Task<Balance> Add(DateTime startTime, DateTime endTime)
        {
            var invoices = invoiceRepository.GetList(startTime, endTime).Result;
            var balance = new Balance();
            balance.StartDate = startTime;
            balance.EndDate = endTime;
            balance.TotalAmount = invoices.Select(x => x.Amount).Sum();

            var numberOfAttendees = invoices.Select(x => x.User).Distinct().Count();
            if (numberOfAttendees > 0)
            {
                balance.AveragePartialAmount = balance.TotalAmount / numberOfAttendees;
            }

            balance.Attendees = GetAttendees(invoices, balance.AveragePartialAmount);

            List<BalanceFragment> balanceFragments = new List<BalanceFragment>();

            GetFragments(balance.TotalAmount, balance.AveragePartialAmount, balance.Attendees.ToList(), balanceFragments);
            balance.BalanceFragments = balanceFragments;

            await _context.Balances.InsertOneAsync(balance);
            return balance;
        }

        public async Task<IEnumerable<Balance>> Get()
        {
            return await _context.Balances.Find(x => true).ToListAsync();
        }

        private IEnumerable<BalanceAttendee> GetAttendees(IEnumerable<Invoice> invoices, float averagePartialAmount)
        {
            IEnumerable<string> users = invoices.Select(x => x.User)
                                            .Distinct();
            var Attendees = users.Select(x =>
            {
                var attendee = new BalanceAttendee();
                attendee.User = x;
                attendee.PartialAmount = invoices.Where(y => y.User == x).Select(y => y.Amount).Sum();
                attendee.PartialAmountDebit = attendee.PartialAmount - averagePartialAmount;
                return attendee;
            }).ToList();

            return Attendees;
        }

        private IEnumerable<BalanceAttendee> GetFragments(float totalAmount, 
                                                        float averagePartialAmount, 
                                                        IEnumerable<BalanceAttendee> attendees, 
                                                        List<BalanceFragment> balanceFragments)
        {
            if (attendees.Count() <= 0)
            {
                return attendees;
            }
            var hasMost = attendees.Aggregate((curuMax, x) => (curuMax == null || x.PartialAmountDebit > curuMax.PartialAmountDebit ? x : curuMax));
            var hasFewest = attendees.Aggregate((curMin, x) => (curMin == null || x.PartialAmountDebit < curMin.PartialAmountDebit ? x : curMin));

            // If 'richest' gets more than 'poorest' has
            if (hasMost.PartialAmountDebit > Math.Abs(hasFewest.PartialAmountDebit))
            {
                // 'poorest' pays everything to 'richest
                balanceFragments.Add(new BalanceFragment(Math.Abs(hasFewest.PartialAmountDebit), hasMost.User, hasFewest.User));

                // delete 'poorest' form list
                attendees = attendees.Where(a => a.User != hasFewest.User);

                // decrease debit from richest
                attendees = attendees.Select(a =>
                {
                    if (a.User != hasMost.User)
                    {
                        a.PartialAmountDebit = a.PartialAmountDebit - Math.Abs(hasFewest.PartialAmountDebit);
                        return a;
                    }
                    else
                    {
                        return a;
                    }
                });
            }
            else
            {
                // 'poorest' pays as much as 'richest' gets
                balanceFragments.Add(new BalanceFragment(hasMost.PartialAmountDebit, hasMost.User, hasFewest.User));

                // delete 'richest' form list
                attendees = attendees.Where(a => a.User != hasMost.User);

                // decrease debit from 'poorest'
                attendees = attendees.Select(a =>
                {
                    if (a.User != hasFewest.User)
                    {
                        a.PartialAmountDebit = a.PartialAmountDebit + hasMost.PartialAmountDebit;
                        return a;
                    }
                    else
                    {
                        return a;
                    }
                });
            }

            return GetFragments(totalAmount, averagePartialAmount, attendees, balanceFragments);
        }
    }
}
