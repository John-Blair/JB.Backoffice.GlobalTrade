    angular.module('globaltrade.models')
        .factory('bookBuilder',
            ['genericModelBuilder', 'Book',
                function (genericModelBuilder, Book) {

                    var Constructor = Book;

                    function formatDateStringNoTime(val) {
                        var dateOnly = val.split('T')[0];
                        var raw = new Date(dateOnly);
                        return raw;
                    }

                return {
                    createDefault: function() {
                        return new Constructor();
                    },
                    transform: function(jsonResult) {
                        var books = [];
                        if (angular.isArray(jsonResult)) {
                            angular.forEach(jsonResult, function (json) {
                                var book = genericModelBuilder.transform(json, Constructor);
                                book.published = formatDateStringNoTime(book.published);
                                book.publishedFormatted = moment(book.published).format("DD-MMM-YYYY");
                                books.push(book);
                            });
                        } else {
                            books = genericModelBuilder.transform(jsonResult, Constructor);
                            books.published = formatDateStringNoTime(books.published);
                            books.publishedFormatted = moment(books.published).format("DD-MMM-YYYY");

                        }
                        return books;
                    }
                };
        }]);
