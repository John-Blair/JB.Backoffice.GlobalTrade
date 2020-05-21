    /**
     * @description
     *  A dialog data object for deleting a book
     */
var DeleteBookDialogData = function () {
        var self = this;
        self.book = {};
        self.name = '';
        self.warning = 'This operation cannot be undone.'
    };

angular.module('globaltrade.models').constant('DeleteBookDialogData', DeleteBookDialogData);
