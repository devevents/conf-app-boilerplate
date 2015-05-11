angular.module('confboilerplate.services', [])


.service('About', function ($http, $q){

  this.get = function() {
    var dfd = $q.defer();

    $http.get('about.json')
    .success(function(data) {
      dfd.resolve(data);
    })
    .error(function(data) {
      dfd.reject(data);
    });

    return dfd.promise;
  };
})

.service('Location', function ($http, $q){

  this.get = function() {
    var dfd = $q.defer();

    $http.get('location.json')
    .success(function(data) {
      dfd.resolve(data);
    })
    .error(function(data) {
      dfd.reject(data);
    });

    return dfd.promise;
  };
})

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

.service('Sponsors', function ($http, $q){

  this.get = function() {
    var dfd = $q.defer();

    $http.get('http://devevents.github.io/conf-app-boilerplate/data/sponsors.json')
    .success(function(data) {

      var gold = _.filter(data, function(sponsor){ return sponsor.type =="gold" }),
          silver = _.filter(data, function(sponsor){ return sponsor.type =="silver" }),
          bronze = _.filter(data, function(sponsor){ return sponsor.type =="bronze" });

      dfd.resolve({
        "gold": gold,
        "silver": silver,
        "bronze": bronze
      });
    })
    .error(function(data) {
      dfd.reject(data);
    });

    return dfd.promise;
  };
})

.service('Partners', function ($http, $q){

  this.get = function() {
    var dfd = $q.defer();

    $http.get('http://devevents.github.io/conf-app-boilerplate/data/partners.json')
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

      var day1 = _.filter(data, function(attraction){ return attraction.date =="day1" }),
          day2 = _.filter(data, function(attraction){ return attraction.date =="day2" });

      dfd.resolve({
        "day1": day1,
        "day2": day2
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