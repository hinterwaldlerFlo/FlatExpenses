using FlatExpenses.DbModels;
using FlatExpenses.IRepository;
using FlatExpenses.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using System;
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
            IEnumerable<string> users = invoices.Select(x => x.User)
                                            .Distinct();
            balance.Attendees = users.Select(x =>
            {
                var attendee = new BalanceAttendee();
                attendee.User = x;
                attendee.PartialAmount = invoices.Where(y => y.User == x).Select(y => y.Amount).Sum();
                return attendee;
            }).ToList();
            await _context.Balances.InsertOneAsync(balance);
            return balance;
        }

        public async Task<IEnumerable<Balance>> Get()
        {
            return await _context.Balances.Find(x => true).ToListAsync();
        }
    }
}
