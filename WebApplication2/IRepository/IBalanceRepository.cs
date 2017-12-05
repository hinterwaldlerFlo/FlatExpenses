using MongoDB.Driver;
using System.Collections.Generic;
using System.Threading.Tasks;
using FlatExpenses.Models;
using System;

namespace FlatExpenses.IRepository
{
    public interface IBalanceRepository
    {
        Task<IEnumerable<Balance>> Get();
        Task<IEnumerable<Balance>> Get(DateTime fromDate, DateTime toDate);
        Task Add(Balance Balance);
        Task<Balance> Add(DateTime startDate, DateTime endTime);
        // Task<string> Update(string id, Balance Balance);
        // Task<DeleteResult> Remove(string id);
        // Task<DeleteResult> RemoveAll();
    }
}
