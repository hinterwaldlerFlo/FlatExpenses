using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FlatExpenses.IRepository;
using FlatExpenses.Models;
using Newtonsoft.Json.Linq;

namespace FlatExpenses.Controllers
{
    [Route("api/[controller]")]
    public class BalancesController
    {
        private readonly IBalanceRepository _balanceRepository;

        public BalancesController(IBalanceRepository balanceRepository)
        {
            _balanceRepository = balanceRepository;
        }

        [HttpGet]
        public Task<string> Get()
        {
            return this.GetBalance();
        }

        private async Task<string> GetBalance()
        {
            var balances = await _balanceRepository.Get();
            return JsonConvert.SerializeObject(balances);
        }

        //[HttpGet("{id}")]
        //public Task<string> Get(string id)
        //{
        //    return this.GetInvoiceById(id);
        //}

        //private async Task<string> GetInvoiceById(string id)
        //{
        //    var invoice = await _invoiceRepository.Get(id) ?? new Invoice();
        //    return JsonConvert.SerializeObject(invoice);
        //}

        [HttpPost]
        public async Task<string> Post([FromBody] JObject data)
        {
            DateTime startDate = data["StartDate"].ToObject<DateTime>();
            DateTime endDate = data["EndDate"].ToObject<DateTime>();

            await _balanceRepository.Add(startDate, endDate);
            return "";
        }

        //[HttpPut("id")]
        //public async Task<string> Put(string id, [FromBody] Invoice invoice)
        //{
        //    if (string.IsNullOrEmpty(id))
        //    {
        //        return "Invalid Id!";
        //    }
        //    return await _invoiceRepository.Update(id, invoice);
        //}

        //[HttpDelete("(id)")]
        //public async Task<string> Delete(string id)
        //{
        //    if (string.IsNullOrEmpty(id)) {
        //        return "Invalid Id!";
        //    }
        //    await _invoiceRepository.Remove(id);
        //    return "";
        //}
    }
}
