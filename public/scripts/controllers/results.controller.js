angular.module('routeApp')
  .controller('ResultsController', ResultsController);

function ResultsController(FoodService, $uibModal, $routeParams) {

  console.log('ResultsController Loaded');

  var results = this;
  results.foods = {};

  results.chosenFood = function (foodObject) {
    FoodService.chosen = foodObject;
  };

  results.getFoodsForResults = function () {
    if ($routeParams.category) {
      console.log($routeParams.category);
      FoodService.getCategory($routeParams.category).then(function (response) {
        console.log('Foods in chosen category, in cat.categoryFoods:', response);
        results.foods.current = response;
        //  Send to FoodService, to be accessed in another view
        FoodService.foods.current = results.foods.current;
      });
    } else if ($routeParams.location) {
      //  Get all foods in a particular location
      FoodService.getLocation($routeParams.location).then(function (response) {
        console.log('Foods in chosen location, in location.locationFoods:', response);
        results.foods.current = response;
        //  Send to FoodService, to be accessed in another view
        FoodService.foods.current = results.foods.current;
      });
    };
  };


  //  Opens the feedback modal
  results.openFeedback = function () {
    var modalInstance = $uibModal.open({
      templateUrl: 'views/modals/feedbackModal.html',
      controller: 'FeedbackController as feedback',
      resolve: {
        type: function () {
          return 'Food List';
        },
      },
    });
  };

  // Back button
  results.back = function () {
    window.history.back();
  };

  results.getFoodsForResults();
}
