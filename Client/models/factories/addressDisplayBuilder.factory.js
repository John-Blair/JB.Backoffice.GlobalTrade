    /**
     * @ngdoc service
     * @name globaltrade.models.addressDisplayBuilder
     *
     * @description
     * A utility service that builds AddressDisplay models
     */
    angular.module('globaltrade.models')
        .factory('addressDisplayBuilder',
            ['genericModelBuilder', 'AddressDisplay',
                function(genericModelBuilder, AddressDisplay) {

                var Constructor = AddressDisplay;

                return {
                    createDefault: function() {
                        return new Constructor();
                    },
                    transform: function(jsonResult) {
                        return genericModelBuilder.transform(jsonResult, Constructor);
                    }
                };
        }]);
