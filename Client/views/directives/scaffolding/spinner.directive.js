/**
 * @ngdoc directive
 * @name gt-spinner
 * @function
 *
 * @description
 * Directive to show a spinner while form values are being preloaded.
 */
angular.module('globaltrade.directives').directive('gtSpinner', function() {
    return {
        restrict: 'E',
        replace: true,
        transclude: 'true',
        templateUrl: '/App_Plugins/globaltrade/Backoffice/globaltrade/directives/spinner.tpl.html'
    };
});
