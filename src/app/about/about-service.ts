///<reference path="../../typings/tsd.d.ts" /> 

'use strict';

angular.module('confboilerplate.about.services')

.service('About', function ($http, $q){

  this.get = function() {
    var dfd = $q.defer();

    $http.get('assets/data/about.json')
    .success(function(data) {
      dfd.resolve(data);
    })
    .error(function(data) {
      dfd.reject(data);
    });

    return dfd.promise;
  };
});
