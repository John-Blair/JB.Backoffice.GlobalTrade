    /**
     * @ngdoc model
     * @name Tab
     * @function
     *
     * @description
     * Backoffice model used for tab navigation
     */
    var Tab = function() {
        var self = this;
        self.id = '';
        self.name = '';
        self.url = '';
        self.active = false;
        self.visible = true;
        self.callback = undefined;
    };

    angular.module('globaltrade.models').constant('Tab', Tab);

    /**
     * @ngdoc model
     * @name TabCollection
     * @function
     *
     * @description
     * Backoffice model used for tab navigation
     */
    var TabCollection = function() {
        this.items = [];
    };

    TabCollection.prototype = (function() {

        // safely adds a tab to the collection
        function addTab(id, name, url) {
            var existing = this.items.filter(function (tab) { return tab.id === id; }).length > 0;
            if (!existing) {
                var tab = new Tab();
                tab.id = id;
                tab.name = name;
                tab.url = url;
                this.items.push(tab);
            }
        }

        function addActionTab(id, name, callback) {
            var existing = this.items.filter(function (tab) { return tab.id === id; }).length > 0;
            if (!existing) {
                var tab = new Tab();
                tab.id = id;
                tab.name = name;
                tab.callback = callback;
                this.items.push(tab);
            }
        }

        function setActive(id) {
           angular.forEach(this.items, function(item) {
               if(item.id === id) {
                   item.active = true;
               } else {
                   item.active = false;
               }
           });
        }

        function hideTab(id) {
            var existing = this.items.find(function (tab) { return tab.id === id; });

            if (existing !== undefined && existing !== null) {
                existing.visible = false;
            }
        }

        function showTab(id) {
            var existing = this.items.find(function (tab) { return tab.id === id; });
            if (existing !== undefined && existing !== null) {
                existing.visible = true;
            }
        }

        function insertTab(id, name, url, index) {
            var existing = this.items.find(function (tab) { return tab.id === id; });
            if (existing === undefined || existing === null) {
                var tab = new Tab();
                tab.id = id;
                tab.name = name;
                tab.url = url;
                if (this.items.length <= index) {
                    addTab.call(this, tab);
                } else {
                    this.items.splice(index, 0, tab);
                }
            }
        }

        function insertActionTab(id, name, callback, index) {
            var existing = this.items.find(function (tab) { return tab.id === id; });
            if (existing === undefined || existing === null) {
                var tab = new Tab();
                tab.id = id;
                tab.name = name;
                tab.callback = callback;
                if (this.items.length <= index) {
                    addTab.call(this, tab);
                } else {
                    this.items.splice(index, 0, tab);
                }
            }
        }

        return {
            addTab: addTab,
            setActive: setActive,
            insertTab: insertTab,
            addActionTab: addActionTab,
            insertActionTab: insertActionTab,
            hideTab: hideTab,
            showTab: showTab
        };
    }());

    angular.module('globaltrade.models').constant('TabCollection', TabCollection);