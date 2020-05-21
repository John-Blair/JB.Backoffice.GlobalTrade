angular.module('globaltrade').controller('GlobalTrade.Backoffice.CamerasCampaignsController',
    ['$scope','$log', '$q', 'tabsFactory',  
    function($scope, $log, $q, tabsFactory) {

        $scope.loaded = true;
        $scope.preValuesLoaded = true;

        $scope.tabs = [];

        // In the initial release of this feature we are only going to allow sharedOnly params
        // to be managed here.  We may open this up at a later date depending on feedback.
        $scope.sharedOnly = true;

        function init() {
            $scope.tabs = tabsFactory.createCamerasListTabs();
            $scope.tabs.setActive('campaigns');
        }
        function save() {
            alert('save');
        }
        $scope.save = save;

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
