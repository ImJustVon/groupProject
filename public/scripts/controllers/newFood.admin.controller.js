angular.module('routeApp').controller('NewFoodAdminController', NewFoodAdminController);

function NewFoodAdminController(FoodService, OptionService) {

  var admin = this;

  //  Visible foods will be visible in admin.allFoods
  //  Option objects will be held in admin.options

  //  Get options for food creation/updating
  admin.getOptions = function() {
    OptionService.getOptions().then(function(response) {
      console.log('GET successful:', response);
      admin.options = response;
    });
  }

  //  Function to get all foods in the database
  admin.getFoods = function() {
    FoodService.getFoods().then(function(response) {
      console.log('GET successful:', response);
      admin.allFoods = response;
    });
  }

  //  Function to add a new food
  admin.addFood = function() {
    var foodData = {
      name: admin.name,
      category: admin.category,
      options: admin.options,
      score: admin.score,
      overRide: admin.overRide,
      // overRideValue: ,
      tags: admin.tags,
      location: admin.location
    }
    if (foodData.overRide) {
      foodData.overRideValue = admin.overRideValue;
    }
    FoodService.postFood(foodData).then(function(response) {
      console.log('POST successful:', response);
    });
  }

}
