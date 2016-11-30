angular.module('routeApp')
  .controller('FoodController', FoodController);

function FoodController(FoodService) {

  console.log('FoodController Loaded');

  var food = this;

  food.chosenFood = FoodService.chosen;
  console.log(food.chosenFood);

// If an option is checked, its modifer score is applied to the food score
  food.modifyScore = function(option) {
    console.log('Modifier from clicked option: ', option.modifier);
    console.log('Grade after checked: ', food.chosenFood.score);

    if (option.clicked) {
      console.log('This click did something: ', option.clicked);
      food.chosenFood.score += option.modifier;

    } else if (!option.clicked) {
      console.log('This click is ', option.clicked);
      food.chosenFood.score += Math.abs(option.modifier);
    }

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
