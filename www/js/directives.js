angular.module('confboilerplate.directives', [])

.directive('scheduleAttraction', function() {
  return {
    templateUrl: 'templates/partials/schedule-attraction.html'
  };
})

.directive('sponsorDetails', function() {
  return {
    templateUrl: 'templates/partials/sponsor-details.html'
  };
});
