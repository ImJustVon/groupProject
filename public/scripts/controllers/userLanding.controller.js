angular.module('routeApp')
       .controller('UserLandingController', UserLandingController);

function UserLandingController(FoodService) {

  console.log('UserLandingController Loaded');

  var user = this;

  user.searchFood = function() {
    FoodService.search(user.search).then(function(result){
      user.searchResult = result;
      FoodService.chosen = result;
      console.log('user.searchResult: ', user.searchResult);
    });
  }
  user.chosenFood = function(foodObject) {
    FoodService.chosen = foodObject;
  }
}
