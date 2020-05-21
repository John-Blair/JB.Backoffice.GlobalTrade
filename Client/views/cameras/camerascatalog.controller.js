angular.module('globaltrade').controller('GlobalTrade.Backoffice.CamerasCatalogController',
    ['$scope','$log', '$q', 'tabsFactory', 'navigationService','eventsService', '$routeParams',
    function ($scope, $log, $q, tabsFactory, navigationService, eventsService, $routeParams) {

        $scope.loaded = true;
        $scope.preValuesLoaded = true;

        $scope.tabs = [];

        // In the initial release of this feature we are only going to allow sharedOnly params
        // to be managed here.  We may open this up at a later date depending on feedback.
        $scope.sharedOnly = true;
        function save() {
            alert('save');
        }
        $scope.save = save;
        function init() {
            $scope.tabs = tabsFactory.createCamerasListTabs();
            $scope.tabs.setActive('catalog');

           navigationService.syncTree({ tree: 'globaltrade', path: ["-1", "cameras"], forceReload: false });

           console.log($routeParams)
            /*
            eventsService.on('appState.treeState.changed', function (event, args) {
                if (args.key === 'selectedNode') {

                    function buildPath(node, path) {
                        path.push(node.id);
                        if (node.id === '-1') return path.reverse();
                        var parent = node.parent();
                        if (parent === undefined) return path;
                        return buildPath(parent, path);
                    }

                    event.currentScope.nav.syncTree({
                        tree: $routeParams.tree,
                        path: buildPath(args.value, []),
                        forceReload: false
                    });
                }
            });
            */




        }


        $scope.load = function(query) {
            query.addSharedOptionOnlyParam($scope.sharedOnly);
            return productOptionResource.searchOptions(query);
        }

        // adds an option
        $scope.add = function(option) {
            // this is the toggle to relead in the directive
            $scope.preValuesLoaded = false;

            productOptionResource.addProductOption(option).then(function(o) {
               $scope.preValuesLoaded = true;
            });
        }

        $scope.delete = function(option) {
            if (option.canBeDeleted()) {
                $scope.preValuesLoaded = false;

                productOptionResource.deleteProductOption(option).then(function() {
                   $scope.preValuesLoaded = true;
                });
            }
        }

        init();
    }]);
