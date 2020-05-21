(function () {

    angular.module('globaltrade.directives').directive('gtBooks', function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '/App_Plugins/globaltrade/Backoffice/globaltrade/directives/books.tpl.html',
            controller: function ($scope, bookResource, Book, ecDialogDataFactory, editorService) {
                bookResource.getAll().then(function (books) {
                    $scope.books = books;
                });
                // Maintenance Modes: List, Edit, Create, Details - all done within the single tab.
                var MaintenanceModes = { LIST: 0, EDIT: 1, DETAILS: 2, CREATE: 3 };
                // Simplify showing sections of html.
                $scope.editMode = MaintenanceModes.EDIT;
                $scope.detailsMode = MaintenanceModes.DETAILS;
                $scope.createMode = MaintenanceModes.CREATE;
                $scope.listMode = MaintenanceModes.LIST;
                $scope.maintenanceMode = MaintenanceModes.LIST;

                $scope.editBook = {};
                $scope.newBook = {};
                $scope.edit = function (book) {
                    $scope.maintenanceMode = MaintenanceModes.EDIT;

                    // Prevent main list being updated until saved to the db.
                    $scope.editBook = angular.copy(book);
                };
                $scope.create = function () {
                    $scope.maintenanceMode = MaintenanceModes.CREATE;

                    $scope.newBook = new Book();
                    $scope.newBook.id = 0; // Causes PetaPoco on server side to create book rather than update.
                    $scope.newBook.price = 0;
                    $scope.newBook.title = "";

                    var now = moment();
                    $scope.newBook.published = now.toDate();
                    $scope.newBook.publishedFormatted = moment(now).format("DD-MMM-YYYY");
                };


                $scope.details = function (book) {
                    $scope.maintenanceMode = MaintenanceModes.DETAILS;

                    $scope.editBook = angular.copy(book);
                };

                $scope.editCancel = function () {
                    $scope.maintenanceMode = MaintenanceModes.LIST;

                    $scope.editBook = {};
                };

                $scope.detailsCancel = function () {
                    $scope.maintenanceMode = MaintenanceModes.LIST;

                    $scope.editBook = {};
                };

                $scope.createCancel = function () {
                    $scope.maintenanceMode = MaintenanceModes.LIST;
                    $scope.newBook = {};
                };

                $scope.editSave = function () {

                    $scope.maintenanceMode = MaintenanceModes.LIST;
                    // UTC is important for dates as it avoids current timezone possibly changing the date when json serialisation kicks in
                    // sending it to the server.
                    $scope.editBook.published = moment.utc($scope.editBook.publishedFormatted, "DD-MMM-YYYY").toDate();
                    bookResource.update($scope.editBook).then(function () {
                        bookResource.getAll().then(function (books) {
                            $scope.books = books;
                        });
                    });
                };
                $scope.save = function () {
                    $scope.maintenanceMode = MaintenanceModes.LIST;
                    $scope.newBook.published = moment.utc($scope.newBook.publishedFormatted, "DD-MMM-YYYY").toDate();
                    bookResource.create($scope.newBook).then(function (response) {
                        bookResource.getAll().then(function (books) {
                            $scope.books = books;
                        });
                    });
                };


                $scope.deleteBookDialog = function (book) {
                    // Get the dialog data for the book and show the dialog to ask user to confirm delete.
                    var dialogData = ecDialogDataFactory.createDeleteBookDialogData();

                    dialogData.book = book;  // Used by callback to make resource call to delete the book.
                    dialogData.name = book.title;
                    // Use umbraco service to show dialog.
                    editorService.open({
                        view: '/App_Plugins/globaltrade/Backoffice/globaltrade/delete.confirmation.html',
                        size: "small",
                        submit: $scope.deleteBookDialogConfirmation,
                        dialogData: dialogData,
                        close: function () {
                            editorService.close();
                        }
                    });
                }


                $scope.deleteBookDialogConfirmation = function (dialogData) {
                    // User cofirmed the delete.
                    // Extract teh book from the dialog data and make a resource call to delete it.
                    // Update books on screen to remove the deleted book.
                    var book = dialogData.book;
                    bookResource.deleteBook(book.id).then(function () {
                        bookResource.getAll().then(function (books) {
                            $scope.books = books;
                        });
                    });
                    editorService.close();
                }

                $scope.delete = function (book) {
                    // Book deltion requires a confirmed dialog response.
                    $scope.deleteBookDialog(book);
                };


                $scope.refresh = function () {
                    // Other users may have added/updated/deleted books.
                    bookResource.getAll().then(function (books) {
                        $scope.books = books;
                    });
                };
            }
        }
    });

})();