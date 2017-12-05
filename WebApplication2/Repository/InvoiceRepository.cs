using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FlatExpenses.DbModels;
using FlatExpenses.IRepository;
using MongoDB.Driver;
using FlatExpenses.Models;
using MongoDB.Bson;

namespace FlatExpenses.Repository
{
    public class InvoiceRepository : IInvoiceRepository
    {
        private readonly DbContext _context = null;

        public InvoiceRepository(IOptions<Settings> settings)
        {
            _context = new DbContext(settings);
        }

        public async Task Add(Invoice invoice)
        {
            invoice.SaveDate = DateTime.UtcNow;
            await _context.Invoices.InsertOneAsync(invoice);
        }

        public async Task<IEnumerable<Invoice>> Get()
        {
            return await _context.Invoices.Find(x => true).ToListAsync();
        }

        public async Task<Invoice> Get(string id)
        {
            var invoice = Builders<Invoice>.Filter.Eq("Id", id);
            return await _context.Invoices.Find(invoice).FirstOrDefaultAsync();
        }

        public async Task<IEnumerable<Invoice>> GetList(DateTime FromDate, DateTime ToDate)
        {
            return await _context.Invoices
                .Find(x => (x.Date >= FromDate && x.Date <= ToDate))
                .ToListAsync();
        }

        public async Task<DeleteResult> Remove(string id)
        {
            return await _context.Invoices.DeleteOneAsync(Builders<Invoice>.Filter.Eq("Id", id));
        }

        public async Task<DeleteResult> RemoveAll()
        {
            return await _context.Invoices.DeleteManyAsync(new BsonDocument());
        }

        public async Task<string> Update(string id, Invoice invoice)
        {
            await _context.Invoices.ReplaceOneAsync(zz => zz.Id == id, invoice);
            return "";
        }
    }
}
