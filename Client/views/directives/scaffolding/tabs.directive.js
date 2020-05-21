angular.module('globaltrade.directives').directive('gtTabs', [function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            tabs: '=',
            widthCss: '=?'
        },
        templateUrl: '/App_Plugins/globaltrade/Backoffice/globaltrade/Directives/tabs.tpl.html',
        link: function(scope, elm, attr) {

            scope.span = 'span12';

            if('widthCss' in attr) {
                scope.span = scope.widthCss;
            }
        }
    };
}]);
