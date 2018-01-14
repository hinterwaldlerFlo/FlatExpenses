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

        public float AveragePartialAmount { get; set; }

        public IEnumerable<BalanceAttendee> Attendees { get; set; }

        public List<BalanceFragment> BalanceFragments { get; set; }
    }

    public class BalanceAttendee
    {
        public string User { get; set; }

        public float PartialAmount { get; set; }

        public float PartialAmountDebit { get; set; }
    }

    public class BalanceFragment
    {
        public float PartialTransferAmount { get; set; }

        public string ReceivingUser { get; set; }

        public string SendingUser { get; set; }

        public BalanceFragment(float partialTransferAmount, string receivingUser, string sendingUser)
        {
            this.PartialTransferAmount = partialTransferAmount;
            this.ReceivingUser = receivingUser;
            this.SendingUser = sendingUser;
        }
    }
}
