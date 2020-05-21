angular.module('globaltrade').controller('GlobalTrade.Backoffice.DashboardController',
    ['$scope',  function($scope) {

        $scope.loaded = false;
        $scope.globaltradeVersion = '1.0.0';

        function init() {
            
              
              $scope.loaded = true;
           
        }

        // initialize the controller
        init();
    }]);
