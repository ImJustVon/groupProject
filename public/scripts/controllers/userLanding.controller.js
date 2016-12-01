angular.module('routeApp')
       .controller('UserLandingController', UserLandingController);

function UserLandingController(FoodService, $uibModal) {

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

  //  Opens the feedback modal
  user.openFeedback = function () {
    var modalInstance = $uibModal.open({
      templateUrl: 'views/modals/feedbackModal.html',
      controller: 'FeedbackController as feedback',
      resolve: {
        type: function() {
          return 'User Landing';
        }
      }
    });
  };
}
