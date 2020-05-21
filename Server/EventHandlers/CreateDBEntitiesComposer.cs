using JB.Backoffice.GlobalTrade;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Umbraco.Core;
using Umbraco.Core.Composing;

namespace JB.Backoffice.GlobalTrade
{
    [RuntimeLevel(MinLevel = RuntimeLevel.Run)]
    public class CreateDBEntitiesComposer : ComponentComposer<CreateDBEntitiesComponent>
    {
        // nothing needed to be done here!
    }

}
