angular.module('routeApp').controller('NewFoodAdminController', NewFoodAdminController);

function NewFoodAdminController(FoodService, OptionService, CategoryService, LocationService, $uibModalInstance) {

  var admin = this;

  admin.category = 'initial';
  admin.location = 'initial';
  admin.optionsList = [];
  //  Visible foods will be visible in admin.allFoods
  //  Option objects will be held in admin.options

  //  Get options for food creation/updating
  admin.getOptions = function() {
    OptionService.getOptions().then(function(response) {
      console.log('GET successful:', response);
      admin.options = response;
    });
  }

  // Get option types for food creation/updating
  admin.getOptionTypes = function() {
    OptionService.getOptionTypes().then(function(response) {
      console.log('Got option types, in admin.types:', response);
      admin.types = response;
    });
  }

  // Populate options based on option type
  admin.populateOptions = function(type) {
    console.log('type', type);
    admin.optionsList = [];
    for (i = 0; i < admin.options.length; i++) {
      if (admin.options[i].type == type) {
        admin.optionsList.push(admin.options[i]);
      }


    }
  }


  //  Get categories for food creation/updating
  admin.getCategories = function() {
    CategoryService.getCategories().then(function(response) {
      console.log('GET successful:', response);
      admin.categories = response;
    });
  }

  //  Get locations for food creation/updating
  admin.getLocations = function() {
    LocationService.getLocations().then(function(response) {
      console.log('GET successful:', response);
      admin.locations= response;
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
    console.log('Step 1: function clicked');
    var foodData = {
      name: admin.name.replace(/ /g,'_'),
      category: admin.category,
      options: admin.options,
      score: admin.score,
      overRide: admin.overRide,
      // overRideValue: ,
      tags: admin.tags.replace(/ /g,'_'),
      location: admin.location
    }
    if (foodData.overRide) {
      foodData.overRideValue = admin.overRideValue;
    }
    console.log('Step 2: foodData packed:', foodData);
    FoodService.postFood(foodData).then(function(response) {
      console.log('Step 5: Controller POST successful:', response);
    });
  }

  admin.getOptions();
  admin.getOptionTypes();
  admin.getCategories();
  admin.getLocations();


  admin.cancel = function() {
    $uibModalInstance.close();
  }

}
