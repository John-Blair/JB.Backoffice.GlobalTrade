angular.module('globaltrade.resources').factory('bookResource', [
    '$q','$http', 'umbRequestHelper','bookBuilder',
    function ($q, $http, umbRequestHelper, bookBuilder) {

        var baseUrl = "/umbraco/backoffice/globaltrade/BooksApi/";

        return {

            getAll: function() {
                var deferred = $q.defer();
                var url = baseUrl + 'GetAll';
                umbRequestHelper.resourcePromise(
                    $http({
                        url: url,
                        method: "GET"
                    }),
                    'Failed to get books collection').then(function (data) {
                        var result = bookBuilder.transform(data);
                        deferred.resolve(result);
                    });

                return deferred.promise;
            },
            create: function (item) {
                var url = baseUrl + 'Create';
                return umbRequestHelper.resourcePromise(
                $http.post(url,item),
                'Failed to create a book: ' + item);
            },
            update: function (item) {
                var url = baseUrl + 'Update';
                return umbRequestHelper.resourcePromise(
                $http.put(url, item),
                'Failed to update a book: ' + item);
            },
            deleteBook: function (id) {
                var url = baseUrl + 'Delete/' + id;
                return umbRequestHelper.resourcePromise(
                $http.delete(url),
                'Failed to delete a book: ' + id);
            }
        };
    }]);
