angular.module('routeApp')
  .controller('EditFoodAdminController', EditFoodAdminController);

function EditFoodAdminController(FoodService, CategoryService, LocationService, OptionService) {

  var edit = this;

  //  Food to be edited {_id, name, category, [options], score, grade, overRide,
  //  overRideValue, tags, location, tip}
  edit.food = FoodService.editFood;

  //  Import all existing objects
  edit.categories = CategoryService.categories;
  edit.locations = LocationService.locations;
  edit.types = [];
  edit.options = [];

  edit.getOptions = function() {
    OptionService.getOptions().then(function(response) {
      edit.options = response;
    });
  }

  edit.getTypes = function() {
    OptionService.getOptionTypes().then(function(response) {
      console.log('Types from response:', response);
      edit.types = response;
    });
  }

  edit.getAll = function() {
    edit.getOptions();
    edit.getTypes();
  }

  edit.updateFood = function() {
    console.log('Food:', edit.food);

    if (edit.food.score >= 81) {
      edit.food.grade = 'A';
    } else if (edit.food.score >= 61 && edit.food.score < 81) {
      edit.food.grade = 'B';
    } else if (edit.food.score >= 41 && edit.food.score < 61) {
      edit.food.grade = 'C';
    } else if (edit.food.score >= 26 && edit.food.score < 41) {
      edit.food.grade = 'D';
    } else if (edit.food.score < 26) {
      edit.food.grade = 'F';
    }

    if (edit.food.overRide) {
      edit.food.grade = edit.food.overRideValue;
    } else {
      edit.food.overRideValue = false;
    }

    FoodService.updateFood(edit.food).then(function(response) {
      console.log('Update successful:', response);
    });
  }

  edit.getAll();
  console.log('Edit.types:', edit.types);
}
