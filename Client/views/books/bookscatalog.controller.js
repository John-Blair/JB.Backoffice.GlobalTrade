angular.module('globaltrade').controller('GlobalTrade.Backoffice.BooksCatalogController',
    ['$scope','$log', '$q', 'tabsFactory','navigationService',
function ($scope, $log, $q, tabsFactory, navigationService) {

        $scope.loaded = true;
        $scope.preValuesLoaded = true;

        $scope.tabs = [];

        function init() {
            $scope.tabs = tabsFactory.createBooksListTabs();
            $scope.tabs.setActive('catalog');

            navigationService.syncTree({ tree: 'globaltrade', path: ["-1","books"], forceReload: false });
        }

        init();
    }]);
