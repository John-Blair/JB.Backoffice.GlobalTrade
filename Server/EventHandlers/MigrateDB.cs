using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Umbraco.Core.Migrations;

namespace JB.Backoffice.GlobalTrade
{
    public class MigrateDB : MigrationBase
    {
        public MigrateDB(IMigrationContext context)
            : base(context)
        { }

        public override void Migrate()
        {
            if (!TableExists(DatabaseConstants.BookTable))
                Create.Table<Book>().Do();
        }
    }
}
