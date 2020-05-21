/**
 * @ngdoc controller
 * @name globaltrade.Backoffice.SettingsController
 * @function
 *
 * @description
 * The controller for the settings management page
 */
angular.module('globaltrade').controller('GlobalTrade.Backoffice.SettingsController',
    ['$scope',
        function($scope) {
            $scope.loaded = true;
            // Hide the spinner and show the form
            $scope.preValuesLoaded = true;
            $scope.languages = [{ isoCode: 'en', name: "English" }, { isoCode: 'fr', name: "French" }];
            $scope.model = { selectedLanguage: { isoCode: 'en', name: "English" } };

            // exposed methods
            $scope.languageChanged = languageChanged;
            $scope.save = save;


            function init() {

               
            }
            function save () {

                alert("Saving..." + JSON.stringify($scope.model.selectedLanguage) );
               
            }

            function languageChanged(language) {
                alert("Language Changed...passed in:" + JSON.stringify(language) + "selectedLanguage is:" + JSON.stringify($scope.model.selectedLanguage) );
            }

            init();
}]);
