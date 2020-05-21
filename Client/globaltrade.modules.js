// Bootstrap the globaltrade angular app
(function () {
    angular.module('globaltrade', [
        'umbraco.filters',
        'umbraco.directives',
        'umbraco.services',
        'globaltrade.filters',
        'globaltrade.directives',
        'globaltrade.resources',
        'globaltrade.services',
        'globaltrade.models',
        'ngStorage'
    ]).config(['$sessionStorageProvider', '$localStorageProvider',
        function ($sessionStorageProvider, $localStorageProvider) {
            $sessionStorageProvider.setKeyPrefix('globaltrade-');
            $localStorageProvider.setKeyPrefix('globaltrade-');
        }]);

    angular.module('globaltrade.models', []);
    angular.module('globaltrade.filters', []);
    angular.module('globaltrade.directives', []);
    angular.module('globaltrade.resources', ['globaltrade.models']);
    angular.module('globaltrade.services', ['globaltrade.models']);
    // Inject our dependencies
    angular.module('umbraco.packages').requires.push('globaltrade');

}());


