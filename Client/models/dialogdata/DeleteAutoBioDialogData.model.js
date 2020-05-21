    /**
     * @description
     *  A dialog data object for deleting auto biography objects
     */
var DeleteAutoBioDialogData = function () {
        var self = this;
        self.author = {};
        self.name = '';
    };

    angular.module('globaltrade.models').constant('DeleteAutoBioDialogData', DeleteAutoBioDialogData);
