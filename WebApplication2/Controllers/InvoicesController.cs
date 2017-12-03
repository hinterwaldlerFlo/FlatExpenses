using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FlatExpenses.IRepository;
using FlatExpenses.Models;

namespace FlatExpenses.Controllers
{
    [Route("api/[controller]")]
    public class InvoicesController
    {
        private readonly IInvoiceRepository _invoiceRepository;

        public InvoicesController(IInvoiceRepository invoiceRepository)
        {
            _invoiceRepository = invoiceRepository;
        }

        [HttpGet]
        public Task<string> Get()
        {
            return this.GetInvoice();
        }

        private async Task<string> GetInvoice()
        {
            var invoices = await _invoiceRepository.Get();
            return JsonConvert.SerializeObject(invoices);
        }

        [HttpGet("{id}")]
        public Task<string> Get(string id)
        {
            return this.GetInvoiceById(id);
        }

        private async Task<string> GetInvoiceById(string id)
        {
            var invoice = await _invoiceRepository.Get(id) ?? new Invoice();
            return JsonConvert.SerializeObject(invoice);
        }

        [HttpPost]
        public async Task<string> Post([FromBody] Invoice invoice)
        {
            await _invoiceRepository.Add(invoice);
            return "";
        }

        [HttpPut("id")]
        public async Task<string> Put(string id, [FromBody] Invoice invoice)
        {
            if (string.IsNullOrEmpty(id))
            {
                return "Invalid Id!";
            }
            return await _invoiceRepository.Update(id, invoice);
        }

        [HttpDelete("(id)")]
        public async Task<string> Delete(string id)
        {
            if (string.IsNullOrEmpty(id)) {
                return "Invalid Id!";
            }
            await _invoiceRepository.Remove(id);
            return "";
        }
    }
}
