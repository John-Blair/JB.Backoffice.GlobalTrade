angular.module('globaltrade.models').factory('tabsFactory',
    ['TabCollection',
        function(TabCollection) {

            var Constructor = TabCollection;

            function createDefault() {
                return new Constructor();
            }

            // creates tabs for the product listing page
            function createProductListTabs() {
                var entityType = 'Product';
                var tabs = new Constructor();
                tabs.addTab('sharedoptions', 'Shared Options', '#/globaltrade/globaltrade/sharedoptions/manage');
                tabs.addTab('filtergroups', 'Filter Groups', '#/globaltrade/globaltrade/productfiltergroups/manage');
                tabs.addTab('contentTypeList', 'Content Types', '#/globaltrade/globaltrade/productcontenttypelist/manage');
                return tabs;
            }

            function createBooksListTabs() {
                var tabs = new Constructor();
                tabs.addTab('catalog', 'Catalog', '#/globaltrade/globaltrade/bookscatalog/manage');
                tabs.addTab('events', 'Events', '#/globaltrade/globaltrade/booksevents/manage');
                tabs.addTab('authorbios', 'Author Biographies', '#/globaltrade/globaltrade/booksauthorbios');
                return tabs;
            }
            function createCamerasListTabs() {
                var entityType = 'Cameras';
                var tabs = new Constructor();
                tabs.addTab('catalog', 'Catalog', '#/globaltrade/globaltrade/camerascatalog');
                tabs.addTab('specialoffers', 'Special Offers', '#/globaltrade/globaltrade/camerasspecialoffers');
                tabs.addTab('campaigns', 'Campaigns', '#/globaltrade/globaltrade/camerascampaigns');
                return tabs;
            }
          
            return {
                createDefault: createDefault,
                createProductListTabs: createProductListTabs,
                createBooksListTabs: createBooksListTabs,
                createCamerasListTabs: createCamerasListTabs
        };

}]);
