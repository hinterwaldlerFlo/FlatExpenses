using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlatExpenses.DbModels
{
    public class Settings
    {
        public string Connectionstring;
        public string Database;
        public IConfigurationRoot iConfigurationRoot;
    }
}
