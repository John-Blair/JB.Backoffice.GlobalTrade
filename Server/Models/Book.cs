using NPoco;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Umbraco.Core.Persistence;
using Umbraco.Core.Persistence.DatabaseAnnotations;

namespace JB.Backoffice.GlobalTrade
{ 

    [TableName(DatabaseConstants.BookTable)]
    [ExplicitColumns]
    [PrimaryKey("id", AutoIncrement = true)]
    public class Book
    {
        [Column("id")]
        [PrimaryKeyColumn(AutoIncrement = true)]
        public int Id { get; set; }

        [Column("title")]
        public string Title { get; set; }

        [Column("price")]
        public decimal Price { get; set; }

        [Column("published")]
        public DateTime Published { get; set; }

        public override string ToString()
        {
            return $"Id:{this.Id},Title:{this.Title},Price:{this.Price},Published:{this.Published}";
        }
    }
}