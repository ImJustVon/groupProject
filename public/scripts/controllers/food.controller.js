angular.module('routeApp')
  .controller('FoodController', FoodController);

function FoodController(FoodService, $uibModal, $scope, $animate) {

  console.log('FoodController Loaded');

  var food = this;

  food.chosenFood = FoodService.chosen;
  console.log(food.chosenFood);
  food.animatedShake = false;
  // If an option is checked, its modifer score is applied to the food score
  food.modifyScore = function (option) {
            // food.animatedShake = false;
            if (option.clicked) {
              food.chosenFood.score += option.modifier;
              console.log('This click did something: ', option.clicked);
              console.log('Modifier from clicked option: ', option.modifier);
              console.log('Grade after checked: ', food.chosenFood.score);

            } else if (!option.clicked) {
              if (option.modifier < 0) {
                food.chosenFood.score += Math.abs(option.modifier);
                console.log('This click is ', option.clicked);
                console.log('Modifier from clicked option: ', option.modifier);
                console.log('Grade after checked: ', food.chosenFood.score);
              } else {
                food.chosenFood.score -= option.modifier;
                console.log('This click is ', option.clicked);
                console.log('Modifier from clicked option: ', option.modifier);
                console.log('Grade after checked: ', food.chosenFood.score);
              }
            }

            var letterBefore = food.chosenFood.grade;

            if (food.chosenFood.score >= 81) {
              food.chosenFood.grade = 'A';
            } else if (food.chosenFood.score >= 61 && food.chosenFood.score < 81) {
              food.chosenFood.grade = 'B';
            } else if (food.chosenFood.score >= 41 && food.chosenFood.score < 61) {
              food.chosenFood.grade = 'C';
            } else if (food.chosenFood.score >= 26 && food.chosenFood.score < 41) {
              food.chosenFood.grade = 'D';
            } else if (food.chosenFood.score < 26) {
              food.chosenFood.grade = 'F';
            }

            if (letterBefore != food.chosenFood.grade) {
              var element = angular.element(document.querySelector('food-animate'));
              element.addClass('shake');
            }

            console.log('animatedShake', food.animatedShake);
          };

  //  Opens the feedback modal
  food.openFeedback = function () {
    var modalInstance = $uibModal.open({
      templateUrl: 'views/modals/feedbackModal.html',
      controller: 'FeedbackController as feedback',
      resolve: {
        type: function () {
          return 'Food: ' + food.chosenFood.name.replace('_', ' ');
        },
      },
    });
  };

  // Back button
  food.back = function () {
    window.history.back();
  };

}
