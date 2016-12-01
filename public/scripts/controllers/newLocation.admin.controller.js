angular.module('routeApp').controller('NewLocationAdminController', NewLocationAdminController);

function NewLocationAdminController(LocationService, $uibModalInstance) {

  var admin = this;

  admin.defaults = [
    { name: 'Food Stand', path: '/assets/images/location-items/food-stand.png' },
    { name: 'Fuel Station', path: '/assets/images/location-items/fuel-station-pump.png' },
    { name: 'Groceries', path: '/assets/images/location-items/groceries.png' },
    { name: 'Restaurant', path: '/assets/images/location-items/restaurant.png' },
    { name: 'Stadium', path: '/assets/images/location-items/stadium-cylinder.png' },
    { name: 'Vending Machine', path: '/assets/images/location-items/vending-machine.png' }, ];

  //  admin.name -> new location name

  //  Post the new location
  admin.addLocation = function () {
    var locationData = {
      name: admin.name.replace(/ /g, '_'),
      file: admin.file,
    };
    LocationService.postLocation(locationData).then(function (response) {
      //  Do something
      console.log('Response:', response);
      admin.getLocations();
    });
  };

  //  Get all locations
  admin.getLocations = function () {
    LocationService.getLocations().then(function (response) {
      console.log('GET successful:', response);
    });
  };

  //  Close modal
  admin.cancel = function () {
    $uibModalInstance.close();
  };

}
