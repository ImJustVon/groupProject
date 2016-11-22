angular.module('routeApp')
  .service('LocationService');

function LocationService($http) {

  var location = this;

  //  Get all locations
  location.getLocations = function() {
    return $http.get('/location').then(function(response) {
      //  Returns array of objects {_id, name}
      return response.data;
    });
  }

  //  Post a location, takes an object {name}
  location.postLocation = function(locationData) {
    return $http({
      method: 'POST',
      url: '/location',
      data: locationData
    }).then(function(response) {
      return response.data;
    });
  }

}
