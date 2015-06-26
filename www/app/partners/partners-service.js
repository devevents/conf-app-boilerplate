'use strict';
angular.module('confboilerplate.partners.services')
    .service('Partners', function ($http, $q) {
    this.get = function () {
        var dfd = $q.defer();
        $http.get('assets/data/partners.json')
            .success(function (data) {
            dfd.resolve(data);
        })
            .error(function (data) {
            dfd.reject(data);
        });
        return dfd.promise;
    };
});

//# sourceMappingURL=../../app/partners/partners-service.js.map