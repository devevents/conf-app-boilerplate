'use strict';

angular.module('confboilerplate.photos.services')

.service('Photos', function($http) {
  var API = {
    BASE_URL: 'https://api.instagram.com/v1/tags/{tag}/media/recent',
    GET_MEDIA: 'https://api.instagram.com/v1/media/{id}',
    CLIENT_ID: '9f02a975012347d99daf55b3507b4f07', // your client id
    COUNT: 20 // default limit by request
  };

  return {
    all: function(tag, url) {
      url = url || API.BASE_URL.replace(/(\{tag\})/g, tag);
      var params = {
        'params': {
          'client_id': API.CLIENT_ID,
          'count': API.COUNT,
          'callback': 'JSON_CALLBACK'
        }
      };

      return $http.jsonp(url, params);
    },
    getMedia: function(id) {
      var url = API.GET_MEDIA.replace(/(\{id\})/g, id);
      var params =  {
        'params': {
          'client_id': API.CLIENT_ID,
          'CALLBACK': 'JSON_CALLBACK'
        }
      };

      return $http.jsonp(url, params);
    }
  };
});
