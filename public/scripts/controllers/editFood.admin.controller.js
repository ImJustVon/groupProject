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
      console.log('Updating food:', edit.food);
      console.log('Update successful:', response);
    });
  }

  //  UNFINISHED
  edit.deleteOptionFromFood = function(optionData) {
    var index = edit.food.options.indexOf(optionData);
    edit.food.options.splice(index, 1);
  }

  edit.deleteLocationFromFood = function(location) {
    var index = edit.food.location.indexOf(location);
    edit.food.location.splice(index, 1);
  }

  edit.deleteTagFromFood = function(tag) {
    var index = edit.food.tags.indexOf(tag);
    edit.food.tags.splice(index, 1);
  }

  edit.addOptionToFood = function() {
    edit.food.options.push({
      name: 'Option',
      type: {
        name: 'Type'
      }
    });
  }

  edit.addLocationToFood = function() {
    edit.food.location.push('Location');
  }

  edit.addTagToFood = function() {
    edit.food.tags.push({value: ''});
  }

  edit.getAll();
}
