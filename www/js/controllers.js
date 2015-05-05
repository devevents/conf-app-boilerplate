angular.module('confboilerplate.controllers', [])

.controller('AppCtrl', function($scope) {

})

.controller('AboutCtrl', function($scope) {

})

.controller('LocationCtrl', function($scope) {
  $scope.position = {
    lat: -3.771020,
    lng: -38.483531
  };

  $scope.$on('mapInitialized', function(attraction, map) {
    $scope.map = map;
  });
})

.controller('SpeakersCtrl', function($scope, $http, Speakers) {
  $scope.speakers = [];

  Speakers.get()
  .then(function(speakers){
    $scope.speakers = speakers;
  },function(err){
  });
})

.controller('ScheduleCtrl', function($scope, Schedule) {
  $scope.attractions = [];

  Schedule.get()
  .then(function(attractions){
    $scope.attractions = attractions;
  },function(err){
  });
})

.controller('AttractionCtrl', function($scope, Schedule, $stateParams) {
  var attractionId = $stateParams.attractionId;

  Schedule.getAttraction(attractionId)
  .then(function(attraction){
    $scope.attraction = attraction;
  },function(err){
  });

})

.controller('SponsorsCtrl', function($scope) {

})

.controller('PartnersCtrl', function($scope) {

})

;
