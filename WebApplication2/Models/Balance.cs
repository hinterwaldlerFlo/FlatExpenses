using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlatExpenses.Models
{
    public class Balance
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }

        public DateTime SaveDate { get; set; }

        [BsonElement("TotalAmout")]
        public float TotalAmount { get; set; }

        public  List<BalanceAttendee> Attendees { get; set; }
    }

    public class BalanceAttendee
    {
        public string User { get; set; }

        public float PartialAmount { get; set; }
    }
}
