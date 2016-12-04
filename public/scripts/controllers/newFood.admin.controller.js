angular.module('routeApp').controller('NewFoodAdminController', NewFoodAdminController);

function NewFoodAdminController(FoodService, OptionService, CategoryService, LocationService, $uibModalInstance, $parse) {

  var admin = this;

  admin.optionsList = [];
  admin.isOpenCsv = false;
  admin.isOpenFood = false;

  //  Visible foods will be visible in admin.allFoods
  //  Option objects will be held in admin.options

  //  Get options for food creation/updating
  admin.getOptions = function () {
    OptionService.getOptions().then(function (response) {
      console.log('GET successful:', response);
      admin.options = response;
      console.log('Options:', admin.options);
    });
  };

  // Get option types for food creation/updating
  admin.getOptionTypes = function () {
    OptionService.getOptionTypes().then(function (response) {
      console.log('Got option types, in admin.types:', response);
      admin.types = response;
    });
  };

  // Populate options based on option type
  admin.populateOptions = function (type) {
    console.log('type', type);
    admin.optionsList = [];
    for (i = 0; i < admin.options.length; i++) {
      if (admin.options[i].type === type) {
        admin.optionsList.push(admin.options[i]);
      }

    }

    console.log('options.list:', admin.optionsList);
  };

  //  Get categories for food creation/updating
  admin.getCategories = function () {
    CategoryService.getCategories().then(function (response) {
      console.log('GET successful:', response);
      admin.categories = response;
    });
  };

  //  Get locations for food creation/updating
  admin.getLocations = function () {
    LocationService.getLocations().then(function (response) {
      console.log('GET successful:', response);
      admin.locations = response;
    });
  };

  //  Function to get all foods in the database
  admin.getFoods = function () {
    FoodService.getFoods().then(function (response) {
      console.log('GET successful:', response);
      admin.allFoods = response;
    });
  };

  admin.addFoodCsv = function () {
    console.log('admin.file', admin.file);
    var string = admin.file.base64;
    // string = atob(string);
    console.log('string:', string);
    FoodService.postFoodCsv(admin.file).then(function (response) {
      console.log(response);
    });
  };

  //  Function to add a new food
  admin.addFood = function () {
    console.log('Step 1: function clicked');
    var foodData = {
      name: admin.name,
      category: admin.category,
      options: admin.array,
      score: admin.score,
      grade: admin.grade,
      overRide: admin.overRide,
      // overRideValue: ,
      tags: admin.tags,
      location: admin.location,

    };

    if (foodData.score >= 81) {
      foodData.grade = 'A';
    } else if (foodData.score >= 61 && foodData.score < 81) {
      foodData.grade = 'B';
    } else if (foodData.score >= 41 && foodData.score < 61) {
      foodData.grade = 'C';
    } else if (foodData.score >= 26 && foodData.score < 41) {
      foodData.grade = 'D';
    } else if (foodData.score < 26) {
      foodData.grade = 'F';
    }

    if (foodData.overRide) {
      foodData.overRideValue = admin.overRideValue;
      foodData.grade = foodData.overRideValue;

    }

    console.log('Step 2: foodData packed:', foodData);
    FoodService.postFood(foodData).then(function (response) {
      console.log('Step 5: Controller POST successful:', response);
    });
  };

  admin.getOptions();
  admin.getOptionTypes();
  admin.getCategories();
  admin.getLocations();

  admin.cancel = function () {
    $uibModalInstance.close();
  };

}
