'use strict';

angular.module('confboilerplate.photos.controllers')

.controller('PhotosCtrl', function(Photos, $scope, $ionicLoading) {
  $scope.photos = [];
  $scope.next_url;
  $scope.tag = 'javascript';

  $ionicLoading.show({
		template: 'Loading...'
	});

  function handlerRequest(response) {
    if (response.data.length >= 1 && response.meta.code === 200) {
      response.data.forEach(function(photo) {
        $scope.photos.push(photo);
        $scope.next_url = response.pagination.next_url;
        $ionicLoading.hide();
      });
    }
  }

  function errorHandler(error) {
    $scope.error = error;
    $ionicLoading.hide();
    console.log('There was an error:', error);
  }

  $scope.loadPhotos = function() {
    $ionicLoading.show({
			template: 'Loading...'
		});

    if ($scope.next_url !== '') {
      Photos.all(null, $scope.next_url)
      .success(handlerRequest)
      .error(errorHandler);
    }
  }

  Photos.all($scope.tag)
  .success(handlerRequest)
  .error(errorHandler);
})

.controller('PhotoCtrl', function(Photos, $stateParams, $scope, $ionicLoading) {
  $scope.photo;

  $ionicLoading.show({
		template: 'Loading...'
	});

  // get photo id
  var photo_id = $stateParams.photo_id;

  Photos.getMedia(photo_id)
  .success(function(response) {
    if (response.meta.code === 200 && response.data !== '') {
      $scope.photo = response.data;
      $ionicLoading.hide();
    }
  })
  .error(function(error) {
    $scope.error = error;
    ionicLoading.hide();
    console.log('There was an error:', error);
  });
});
