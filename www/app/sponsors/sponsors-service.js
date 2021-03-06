'use strict';
angular.module('confboilerplate.sponsors.services')
    .service('Sponsors', function ($http, $q) {
    this.get = function () {
        var dfd = $q.defer();
        $http.get('assets/data/sponsors.json')
            .success(function (data) {
            var gold = _.filter(data, function (sponsor) { return sponsor.type === "gold"; }), silver = _.filter(data, function (sponsor) { return sponsor.type === "silver"; }), bronze = _.filter(data, function (sponsor) { return sponsor.type === "bronze"; });
            dfd.resolve({
                "gold": gold,
                "silver": silver,
                "bronze": bronze
            });
        })
            .error(function (data) {
            dfd.reject(data);
        });
        return dfd.promise;
    };
});

//# sourceMappingURL=../../app/sponsors/sponsors-service.js.map