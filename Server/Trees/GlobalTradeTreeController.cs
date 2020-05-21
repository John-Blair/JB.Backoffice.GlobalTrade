namespace JB.Backoffice.GlobalTrade
{
    using System;
    using System.Net.Http.Formatting;
    using Umbraco.Core;
    using Umbraco.Core.Services;
    using Umbraco.Web.Models.Trees;
    using Umbraco.Web.Mvc;
    using Umbraco.Web.Trees;

    /// <summary>
    /// People tree controller class
    /// </summary>
    [Tree("globaltrade", "globaltrade", TreeTitle="Global Trade")]
    [PluginController("globaltrade")]
    public class GlobalTradeTreeController : TreeController
    {


        /// <summary>
        /// Gets the menu for node.
        /// </summary>
        /// <param name="id">The identifier.</param>
        /// <param name="queryStrings">The query strings.</param>
        /// <returns>The menu items.</returns>
        protected override MenuItemCollection GetMenuForNode(string id, FormDataCollection queryStrings)
        {
            var menu = new MenuItemCollection();
            if (id == Constants.System.Root.ToInvariantString())
            {
                // root actions              
                menu.Items.Add(new RefreshNode(Services.TextService, true));

            }

            return menu;
        }

        protected override TreeNodeCollection GetTreeNodes(string id, System.Net.Http.Formatting.FormDataCollection queryStrings)
        {
            var nodes = new TreeNodeCollection();

            //check if we're rendering the root node's children
            if (id == Constants.System.Root.ToInvariantString())
            {
                // Add the content nodes to the root of the tree
                TreeNode node = CreateTreeNode(
                    "books",
                    "-1",
                    queryStrings,
                    "Books",
                    "icon-umb-content",
                    false,
                    "globaltrade/globaltrade/bookscatalog");

                nodes.Add(node);


                node = CreateTreeNode(
                    "cameras",
                    "-1",
                    queryStrings,
                    "Cameras",
                    "icon-umb-content",
                    false,
                    "globaltrade/globaltrade/camerascatalog");

                nodes.Add(node);
            }


            return nodes;
        }


    }
}

