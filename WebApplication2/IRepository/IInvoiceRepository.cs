using MongoDB.Driver;
using System.Collections.Generic;
using System.Threading.Tasks;
using FlatExpenses.Models;

namespace FlatExpenses.IRepository
{
    public interface IInvoiceRepository
    {
        Task<IEnumerable<Invoice>> Get();
        Task<Invoice> Get(string id);
        Task Add(Invoice Invoice);
        Task<string> Update(string id, Invoice Invoice);
        Task<DeleteResult> Remove(string id);
        Task<DeleteResult> RemoveAll();
    }
}
