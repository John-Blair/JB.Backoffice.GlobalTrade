angular.module('globaltrade').controller('GlobalTrade.Backoffice.BooksEventsController',
    ['$scope','$log', '$q', 'tabsFactory',  
    function($scope, $log, $q, tabsFactory) {

        $scope.loaded = true;
        $scope.preValuesLoaded = true;

        $scope.tabs = [];

        function init() {
            $scope.tabs = tabsFactory.createBooksListTabs();
            $scope.tabs.setActive('events');
        }

        function save() {
            alert('save');
        }
        $scope.save = save
        init();
    }]);
