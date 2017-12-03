using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlatExpenses.Models
{
    public class Invoice
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        public string User { get; set; }

        public float Amount { get; set; }

        public DateTime Date { get; set; }

        public DateTime SaveDate { get; set; }
    }
}
