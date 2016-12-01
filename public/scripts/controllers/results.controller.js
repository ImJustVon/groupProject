angular.module('routeApp')
  .controller('ResultsController', ResultsController);

function ResultsController(FoodService, $uibModal) {

  console.log('ResultsController Loaded');

  var results = this;

  results.foods = FoodService.foods;

  results.chosenFood = function(foodObject) {
    FoodService.chosen = foodObject;
  }

  //  Opens the feedback modal
  results.openFeedback = function () {
    var modalInstance = $uibModal.open({
      templateUrl: 'views/modals/feedbackModal.html',
      controller: 'FeedbackController as feedback',
      resolve: {
        type: function() {
          return 'Food List';
        }
      }
    });
  };
}
