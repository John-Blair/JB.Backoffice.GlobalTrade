angular.module('globaltrade').controller('GlobalTrade.Backoffice.BooksAuthorBiosController',
    ['$scope', '$log', '$q', 'tabsFactory', 'ecDialogDataFactory', 
function ($scope, $log, $q, tabsFactory, ecDialogDataFactory) {

        $scope.loaded = true;
        $scope.preValuesLoaded = true;

        $scope.tabs = [];

        function init() {
            $scope.tabs = tabsFactory.createBooksListTabs();
            $scope.tabs.setActive('authorbios');
        }
        function save() {
            alert('save');
        }
        $scope.save = save;

        function deleteAutoBioDialog() {
            console.log(ecDialogDataFactory);
            var dialogData = ecDialogDataFactory.createDeleteAutoBioDialogData();


            dialogData.author.id = '123';
            dialogData.name = 'John Blair (ISBN:123-456-789)';
            dialogData.warning = 'This action is not reversible.';

            dialogService.open({
                template: '/App_Plugins/globaltrade/Backoffice/globaltrade/delete.confirmation.html',
                show: true,
                callback: $scope.deleteAutoBioDialogConfirmation,
                dialogData: dialogData
            });
        }

        $scope.deleteAutoBioDialog = deleteAutoBioDialog;

        $scope.deleteAutoBioDialogConfirmation = function (dialogData) {

            alert('Deleting ' + dialogData.name + ": Author Id" + dialogData.author.id);
            return;

            if (option.canBeDeleted()) {
                $scope.preValuesLoaded = false;

                productOptionResource.deleteProductOption(option).then(function() {
                   $scope.preValuesLoaded = true;
                });
            }
        }

        $scope.load = function (query) {
            query.addSharedOptionOnlyParam($scope.sharedOnly);
            return productOptionResource.searchOptions(query);
        }

         // adds an option
        $scope.add = function (option) {
            // this is the toggle to relead in the directive
            $scope.preValuesLoaded = false;

            productOptionResource.addProductOption(option).then(function (o) {
                $scope.preValuesLoaded = true;
            });
        }

        init();
    }]);
