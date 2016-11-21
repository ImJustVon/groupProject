angular.module('routeApp').controller('NewFoodAdminController', NewFoodAdminController);

function NewFoodAdminController(FoodService) {

  var admin = this;

  //  Visible foods will be visible in admin.allFoods

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
      name: ,
      category: ,
      options: ,
      score: ,
      overRide: ,
      overRideValue: ,
      tags:
    }
    FoodService.postFood(foodData).then(function(response) {
      console.log('POST successful:', response);
    });
  }

}
