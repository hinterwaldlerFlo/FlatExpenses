﻿using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FlatExpenses.Models;

namespace FlatExpenses.DbModels
{
    public class DbContext
    {
        public IConfigurationRoot Configuration { get; }
        private IMongoDatabase _database = null;

        public DbContext(IOptions<Settings> settings)
        {
            Configuration = settings.Value.iConfigurationRoot;
            settings.Value.Connectionstring = Configuration.GetSection("MongoConnection:ConnectionString").Value;
            settings.Value.Database = Configuration.GetSection("MongoConnection:Database").Value;

            var client = new MongoClient(settings.Value.Connectionstring);
            if (client != null)
            {
                _database = client.GetDatabase(settings.Value.Database);
            }
        }

        public IMongoCollection<Student> Students
        {
            get
            {
                return _database.GetCollection<Student>("Student");
            }
        }

        public IMongoCollection<Invoice> Invoices
        {
            get
            {
                return _database.GetCollection<Invoice>("Invoices");
            }
        }

        public IMongoCollection<Balance> Balances
        {
            get
            {
                return _database.GetCollection<Balance>("Balances");
            }
        }
    }
}
