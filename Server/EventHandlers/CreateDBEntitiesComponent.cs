using JB.Backoffice.GlobalTrade;
using System;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading;
using System.Web;
using Umbraco.Core.Composing;
using Umbraco.Core.Events;
using Umbraco.Core.Logging;
using Umbraco.Core.Migrations;
using Umbraco.Core.Migrations.Upgrade;
using Umbraco.Core.Models;
using Umbraco.Core.Models.PublishedContent;
using Umbraco.Core.Scoping;
using Umbraco.Core.Services;
using Umbraco.Core.Services.Implement;
using Umbraco.Web;

public class CreateDBEntitiesComponent : IComponent
{
    private readonly IScopeProvider scopeProvider;
    private readonly IMigrationBuilder migrationBuilder;
    private readonly IKeyValueService keyValueService;
    private readonly ILogger logger;

    public CreateDBEntitiesComponent(
        IScopeProvider scopeProvider,
        IMigrationBuilder migrationBuilder,
        IKeyValueService keyValueService,
        ILogger logger)
    {
        this.scopeProvider = scopeProvider;
        this.migrationBuilder = migrationBuilder;
        this.keyValueService = keyValueService;
        this.logger = logger;
    }

    public void Initialize()
    {
        // perform any upgrades (as needed)
        var upgrader = new Upgrader(new MigrationPlan01());
        upgrader.Execute(scopeProvider, migrationBuilder, keyValueService, logger);

    }

    public void Terminate()
    {
        
    }
}
