angular.module('routeApp')
  .controller('LocationController', LocationController);

function LocationController(LocationService, FoodService, $uibModal) {

  console.log('LocationController Loaded');

  var location = this;

  //  Get all locations from database
  location.getLocations = function () {
    LocationService.getLocations().then(function (response) {
      console.log('Got Locations, in location.locations:', response);
      location.locations = response;
    });
  };

  //  Get all foods in a particular location
  location.getLocationFoods = function (location) {
    FoodService.getLocation(location).then(function (response) {
      console.log('Foods in chosen location, in location.locationFoods:', response);
      location.locationFoods = response;
      //  Send to FoodService, to be accessed in another view
      FoodService.foods.current = location.locationFoods;
    });
  };

  //  Opens the feedback modal
  location.openFeedback = function () {
    var modalInstance = $uibModal.open({
      templateUrl: 'views/modals/feedbackModal.html',
      controller: 'FeedbackController as feedback',
      resolve: {
        type: function () {
          return 'Locations';
        },
      },
    });
  };

  //  Get all locations when page loads
  location.getLocations();

  // Back button
  location.back = function () {
    window.history.back();
  };

}
