using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Umbraco.Core.Migrations;

namespace JB.Backoffice.GlobalTrade
{
    public class MigrationPlan01 : MigrationPlan
    {
        public MigrationPlan01()
            : base("globaltrade")
        {
            From(string.Empty)
                .To<MigrateDB>("v02");
        }
    }
}
