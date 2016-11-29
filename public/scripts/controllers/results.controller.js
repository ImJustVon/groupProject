angular.module('routeApp')
  .controller('ResultsController', ResultsController);

function ResultsController(FoodService) {

  console.log('ResultsController Loaded');

  var results = this;

  results.foods = FoodService.foods;

}
