/**
 * @ngdoc resource
 * @name auditLogResource
 * @description Loads in data and allows modification of audit logs
 **/
angular.module('globaltrade.resources').factory('auditLogResource', [
    '$http', 'umbRequestHelper',
    function ($http, umbRequestHelper) {
        return {
            /**
             * @ngdoc method
             * @name getByEntityKey
             * @description
             **/

            /** Sample Usage in controller
                var promiseLoadAuditLog = auditLogResource.getByEntityKey(key);
                promiseLoadAuditLog.then(function(auditLogResponse) {
                $scope.auditLog = auditLogBuilder.transform(auditLogResponse);

                TODO: Move then etc into the resource so only the auditLog is returned.
           **/


            getByEntityKey: function (key) {
                var url = Umbraco.Sys.ServerVariables["globaltradeUrls"]["AuditLogApiBaseUrl"] + 'GetByEntityKey';
                return umbRequestHelper.resourcePromise(
                $http({
                    url: url,
                    method: "GET",
                    params: { id: key }
                }),
                'Failed to audit logs for entity with following key: ' + key);
            }
        };
    }]);
