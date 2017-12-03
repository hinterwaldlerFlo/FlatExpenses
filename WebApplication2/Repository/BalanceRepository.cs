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

        public BalanceRepository(IOptions<Settings> settings)
        {
            _context = new DbContext(settings);
        }

        public async Task Add(Balance balance)
        {
            await _context.Balances.InsertOneAsync(balance);
        }

        public async Task Add(DateTime startTime, DateTime endTime)
        {
            await _context.Balances.InsertOneAsync(new Balance());
        }

        public async Task<IEnumerable<Balance>> Get()
        {
            return await _context.Balances.Find(x => true).ToListAsync();
        }
    }
}
