angular.module('globaltrade.directives').directive('gtHello', function () {
    return {
        restrict: 'E',
        replace: true,
        scope:{
            name: '@'
        },
        templateUrl: '/App_Plugins/globaltrade/Backoffice/globaltrade/directives/hello.tpl.html',
        controller: function ($scope) {

            function init() {
                
            }

            init();
        }
    };
});
