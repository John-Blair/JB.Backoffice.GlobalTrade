    /**
     * @ngdoc directive
     * @name gt-panel-body
     * @function
     *
     * @description
     * Directive to operate as the main umbraco content editor for a tab - excludes the drawer buttons.
     */
     angular.module('globaltrade.directives').directive('gtPanelFlexbox', function() {
         return {
             restrict: 'E',
             replace: true,
             link: function ($scope, $element, $attributes) {
                 $scope.title = $attributes.boxtitle;
             },
             transclude: 'true',
             templateUrl: '/App_Plugins/globaltrade/Backoffice/globaltrade/directives/panelflexbox.tpl.html'
         };
     });
