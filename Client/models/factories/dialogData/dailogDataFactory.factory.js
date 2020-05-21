/**
 * @ngdoc service
 *
 * @description
 * A utility service that builds dialogData models
 */
angular.module('globaltrade.models').factory('ecDialogDataFactory',
    [
    function() {


        // creates a dialog data model for deleting an auto bio
        function createDeleteAutoBioDialogData() {
            return new DeleteAutoBioDialogData();
        }
        function createDeleteBookDialogData() {
            return new DeleteBookDialogData();
        }

        return {
            createDeleteAutoBioDialogData: createDeleteAutoBioDialogData,
            createDeleteBookDialogData: createDeleteBookDialogData
    };
}]);
