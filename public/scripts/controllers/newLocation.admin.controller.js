angular.module('routeApp').controller('NewLocationAdminController', NewLocationAdminController);

function NewLocationAdminController($uibModalInstance) {
// LocationService,
  var admin = this;

  //  admin.name -> new location name

  //  Post the new location
  admin.addLocation = function() {
    var locationData = {
      name: admin.name
    }
    LocationService.postLocation(locationData).then(function(response) {
      //  Do something
      console.log('Response:', response);
      admin.getLocations();
    });
  // }

  //  Get all locations
  admin.getLocations = function() {
    LocationService.getLocations().then(function(response) {
      console.log('GET successful:', response);
    });
  }

  //  Close modal
  admin.cancel = function() {
    $uibModalInstance.close();
  }

}
