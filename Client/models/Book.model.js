    var Book = function () {

        var self = this;

        self.id = 0;
        self.title = '';
        self.published = '';
        self.price = 0;
    };

    Book.prototype = (function () {

        function clone() {
            var dst = new Book();
            angular.extend(dst, this);
            return dst;
        }

        return {
            clone: clone
        };
    }());

    angular.module('globaltrade.models').constant('Book', Book);
