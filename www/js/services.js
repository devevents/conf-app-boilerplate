angular.module('confboilerplate.services', [])

.service('Speakers', function ($http, $q){

  this.get = function() {
    var dfd = $q.defer();

    $http.get('http://devevents.github.io/conf-app-boilerplate/data/speakers.json')
    .success(function(data) {
      dfd.resolve(data);
    })
    .error(function(data) {
      dfd.reject(data);
    });

    return dfd.promise;
  };
})

.service('Schedule', function ($http, $q){

  this.get = function() {
    var dfd = $q.defer();

    $http.get('http://devevents.github.io/conf-app-boilerplate/data/schedule.json')
    .success(function(data) {

      var 1 = _.filter(data, function(attraction){ return attraction.date =="1" }),
          2 = _.filter(data, function(attraction){ return attraction.date =="2" });

      dfd.resolve({
        "1": 1,
        "2": 2
      });
    })
    .error(function(data) {
      dfd.reject(data);
    });

    return dfd.promise;
  };

  this.getAttraction = function(attractionId){
    var dfd = $q.defer();

    $http.get('http://devevents.github.io/conf-app-boilerplate/data/schedule.json')
    .success(function(data) {
      var attraction = _.find(data, {id: attractionId});
      dfd.resolve(attraction);
    })
    .error(function(data) {
      dfd.reject(data);
    });

    return dfd.promise;
  };
});
