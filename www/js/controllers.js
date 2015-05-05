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

  $scope.$on('mapInitialized', function(event, map) {
    $scope.map = map;
  });
})

.controller('SpeakersCtrl', function($scope) {

})

.controller('ScheduleCtrl', function($scope) {

})

.controller('AttractionCtrl', function($scope, $stateParams) {
  $scope.attractionId = $stateParams.attractionId;
})

.controller('SponsorsCtrl', function($scope) {

})

.controller('PartnersCtrl', function($scope) {

})

;
