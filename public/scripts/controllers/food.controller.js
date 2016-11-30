angular.module('routeApp')
  .controller('FoodController', FoodController);

function FoodController(FoodService) {

  console.log('FoodController Loaded');

  var food = this;

  food.chosenFood = FoodService.chosen;
  console.log(food.chosenFood);

// If an option is checked, its modifer score is applied to the food score
  food.modifyScore = function(modifier) {
    console.log('Modifier from clicked option: ', modifier);
    food.chosenFood.score += modifier;
    console.log('Grade after checked: ', food.chosenFood.score);

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
  }

}
