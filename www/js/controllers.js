angular.module('confboilerplate.controllers', [])

.controller('AppCtrl', function($scope) {

})

.controller('AboutCtrl', function($scope, $http, About, $ionicLoading) {
  $scope.about = [];
  $ionicLoading.show({
    template: 'Loading...'
  });

  About.get()
  .then(function(about){
    $scope.about = about;
    $ionicLoading.hide();
  },function(err){
    $ionicLoading.hide();
  });

  $scope.goToUrl = function(url){
    //use inAppBrowser plugin
    window.open(url, '_blank', 'location=yes');
  }
})

.controller('LocationCtrl', function($scope, $http, Position, $ionicLoading) {
  $scope.position = [];
  $ionicLoading.show({
    template: 'Loading...'
  });

  Position.get()
  .then(function(position){
    $scope.position = position;
    $ionicLoading.hide();
  },function(err){
    $ionicLoading.hide();
  });

  $scope.goToUrl = function(url){
    //use inAppBrowser plugin
    window.open(url, '_blank', 'location=yes');
  }

  $scope.$on('mapInitialized', function(attraction, map) {
    $scope.map = map;
  });
})

.controller('SpeakersCtrl', function($scope, $http, Speakers, $ionicLoading) {
  $scope.speakers = [];

  $ionicLoading.show({
    template: 'Loading...'
  });

  Speakers.get()
  .then(function(speakers){
    $scope.speakers = speakers;
    $ionicLoading.hide();
  },function(err){
    $ionicLoading.hide();
  });

  $scope.goToUrl = function(url){
    //use inAppBrowser plugin
    window.open(url, '_blank', 'location=yes');
  }
})

.controller('ScheduleCtrl', function($scope, Schedule, $ionicLoading) {
  $scope.attractions = [];

  $ionicLoading.show({
    template: 'Loading...'
  });

  Schedule.get()
  .then(function(attractions){
    $scope.attractions = attractions;
    $ionicLoading.hide();
  },function(err){
    $ionicLoading.hide();
  });
})

.controller('AttractionCtrl', function($scope, Schedule, $stateParams, $ionicLoading) {
  var attractionId = $stateParams.attractionId;

  $ionicLoading.show({
    template: 'Loading...'
  });

  Schedule.getAttraction(attractionId)
  .then(function(attraction){
    $scope.attraction = attraction;
    $ionicLoading.hide();
  },function(err){
    $ionicLoading.hide();
  });

  $scope.shareAttraction = function(attraction){
    var speakersText = "";

    _.each(attraction.speakers, function(speaker, index){
      speakersText += speaker.name;
      if((index+1) < attraction.speakers.length){
        speakersText += " & ";
      }
    });

    var message = "Enjoying " + attraction.title + " by " + speakersText + " at #MyConf";
    window.plugins.socialsharing.share(message);
  };

})

.controller('SponsorsCtrl', function($scope, Sponsors, $ionicLoading) {
  $scope.sponsors = [];

  $ionicLoading.show({
    template: 'Loading...'
  });

  Sponsors.get()
  .then(function(sponsors){
    $scope.sponsors = sponsors;
    $ionicLoading.hide();
  },function(err){
    $ionicLoading.hide();
  });
  
  $scope.goToUrl = function(url){
    //use inAppBrowser plugin
    window.open(url, '_blank', 'location=yes');
  }  
})

.controller('PartnersCtrl', function($scope, $http, Partners, $ionicLoading) {
  $scope.partners = [];

  $ionicLoading.show({
    template: 'Loading...'
  });

  Partners.get()
  .then(function(partners){
    $scope.partners = partners;
    $ionicLoading.hide();
  },function(err){
    $ionicLoading.hide();
  });

  $scope.goToUrl = function(url){
    //use inAppBrowser plugin
    window.open(url, '_blank', 'location=yes');
  }
})

.controller('PartnersCtrl', function($scope) {

});
