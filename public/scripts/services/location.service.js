angular.module('routeApp')
  .service('LocationService', LocationService);

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

  //  Update a location, takes an object {_id}
  location.updateLocation = function(locationData) {
    return $http({
      method: 'PUT',
      url: '/location/' + locationData._id,
      data: locationData
    }).then(function(response) {
      console.log('Update successful:', response.data);
      return response.data;
    });
  }

  //  Delete a location, takes an object {_id}
  location.deleteLocation = function(locationData) {
    return $http({
      method: 'DELETE',
      url: '/location/' + locationData._id,
      data: locationData
    }).then(function(response) {
      console.log('Delete successful:', response);
      return response;
    });

  }

}
