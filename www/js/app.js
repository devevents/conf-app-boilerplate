angular.module('underscore', [])
.factory('_', function() {
  return window._;
});

// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('confboilerplate', [
  'ionic',
  'ngMap',
  'confboilerplate.controllers',
  'confboilerplate.services',
  'confboilerplate.filters',
  'confboilerplate.directives'
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  
  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.about', {
    url: "/about",
    views: {
      'menuContent': {
        templateUrl: "templates/about.html",
        controller: 'AboutCtrl'
      }
    }
  })

  .state('app.location', {
    url: "/location",
    views: {
      'menuContent': {
        templateUrl: "templates/location.html",
        controller: 'LocationCtrl'
      }
    }
  })
  
  .state('app.speakers', {
    url: "/speakers",
    views: {
      'menuContent': {
        templateUrl: "templates/speakers.html",
        controller: 'SpeakersCtrl'
      }
    }
  })

  .state('app.schedule', {
    url: "/schedule",
    views: {
      'menuContent': {
        templateUrl: "templates/schedule.html",
        controller: 'ScheduleCtrl'
      }
    }
  })

      .state('app.attraction', {
        url: "/attraction/:attractionId",
        views: {
          'menuContent': {
            templateUrl: "templates/partials/attraction.html",
            controller: 'AttractionCtrl'
          }
        }
      })
  
  .state('app.sponsors', {
    url: "/sponsors",
    views: {
      'menuContent': {
        templateUrl: "templates/sponsors.html",
        controller: 'SponsorsCtrl'
      }
    }
  })
  
  .state('app.partners', {
    url: "/partners",
    views: {
      'menuContent': {
        templateUrl: "templates/partners.html",
        controller: 'PartnersCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/schedule');
});
