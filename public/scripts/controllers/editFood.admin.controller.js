angular.module('routeApp')
  .controller('EditFoodAdminController', EditFoodAdminController);

function EditFoodAdminController(FoodService) {

  var edit = this;

  //  Food to be edited {_id, name, category, [options], score, grade, overRide,
  //  overRideValue, tags, location, tip}
  edit.food = FoodService.editFood;



}
