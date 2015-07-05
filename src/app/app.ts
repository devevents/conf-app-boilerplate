/// <reference path="../typings/tsd.d.ts" />

'use strict';

angular.module('confboilerplate', [
  'ionic',
  'ngMap',
  'underscore',
  'confboilerplate.filters',
  'confboilerplate.about',
  'confboilerplate.location',
  'confboilerplate.partners',
  'confboilerplate.schedule',
  'confboilerplate.photos',
  'confboilerplate.speakers',
  'confboilerplate.sponsors'
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && (<any>window.cordova.plugins).Keyboard) {
        (<any>cordova.plugins).Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      window.StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "app/menu/menu.html"
  })

  .state('app.about', {
    url: "/about",
    views: {
      'menuContent': {
        templateUrl: "app/about/about.html",
        controller: 'AboutCtrl'
      }
    }
  })

  .state('app.location', {
    url: "/location",
    views: {
      'menuContent': {
        templateUrl: "app/location/location.html",
        controller: 'LocationCtrl'
      }
    }
  })

  .state('app.speakers', {
    url: "/speakers",
    views: {
      'menuContent': {
        templateUrl: "app/speakers/speakers.html",
        controller: 'SpeakersCtrl'
      }
    }
  })

  .state('app.schedule', {
    url: "/schedule",
    views: {
      'menuContent': {
        templateUrl: "app/schedule/schedule.html",
        controller: 'ScheduleCtrl'
      }
    }
  })

  .state('app.photos', {
    url: '/photos',
    views: {
      'menuContent': {
        templateUrl: 'app/photos/photos.html',
        controller: 'PhotosCtrl'
      }
    }
  })

  .state('app.single_photo', {
    url: '/photos/:photo_id',
    views: {
      'menuContent': {
        templateUrl: 'app/photos/single_photo.html',
        controller: 'PhotoCtrl'
      }
    }
  })

      .state('app.attraction', {
        url: "/attraction/:attractionId",
        views: {
          'menuContent': {
            templateUrl: "app/schedule/attraction.html",
            controller: 'AttractionCtrl'
          }
        }
      })

  .state('app.sponsors', {
    url: "/sponsors",
    views: {
      'menuContent': {
        templateUrl: "app/sponsors/sponsors.html",
        controller: 'SponsorsCtrl'
      }
    }
  })

  .state('app.partners', {
    url: "/partners",
    views: {
      'menuContent': {
        templateUrl: "app/partners/partners.html",
        controller: 'PartnersCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/schedule');
});
