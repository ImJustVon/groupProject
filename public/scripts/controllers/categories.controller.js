angular.module('routeApp')
  .controller('CategoriesController', CategoriesController);

function CategoriesController(CategoryService, FoodService, $uibModal) {

  var cat = this;

  //  Array to hold all categories
  cat.categories = [];

  //  Get all categories from database
  cat.getCategories = function () {
    CategoryService.getCategories().then(function (response) {
      console.log('Got categories, in cat.categories:', response);
      cat.categories = response;
    });
  };

  //  Get all foods in a particular category
  cat.getCategoryFoods = function (category) {
    FoodService.getCategory(category).then(function (response) {
      console.log('Foods in chosen category, in cat.categoryFoods:', response);
      cat.categoryFoods = response;
      //  Send to FoodService, to be accessed in another view
      FoodService.foods.current = cat.categoryFoods;
    });
  };

  //  Opens the feedback modal
  cat.openFeedback = function () {
    var modalInstance = $uibModal.open({
      templateUrl: 'views/modals/feedbackModal.html',
      controller: 'FeedbackController as feedback',
      resolve: {
        type: function () {
          return 'Categories';
        },
      },
    });
  };

  //  Get all categories when page loads [{_id, name, imageLocation}]
  cat.getCategories();


  // Back button
  cat.back = function () {
    window.history.back();
  };
}
