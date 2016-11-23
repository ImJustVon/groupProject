angular.module('routeApp')
  .service('FoodService', FoodService)

//  Service holds data accessed across multiple controllers
function FoodService ($http) {

  var food = this;

  //  This will hold various values:
    //  Object with properties holding arrays of objects
    //  food.foods.current holds an array of foods, accessed in a view
    //  food.foods.saved holds an array of foods favorited by the user
  food.foods = {
    current: [],
    saved: []
  };

  //  A specific chosen food will be stored in an object called food.chosen
    //  {_id, name, category, options, score, overRide, overRideValue, tags, location}
  food.chosen = {};

  //  Get all foods
  food.getFoods = function() {
    return $http.get('/food').then(function(response) {
      //  Returns array of objects {_id, name, category, options, score, overRide, overRideValue, tags, location}
      return response.data;
    });
  }

  //  Post a food, takes object {name, category, options, score, overRide, overRideValue, tags, location}
  food.postFood = function(foodData) {
    console.log('Step 3: inside food service');
    return $http({
      method: 'POST',
      url: '/food',
      data: foodData
    }).then(function(response) {
      console.log('Step 4: POST successful:', response.data);
      return response.data;
    });
  }

  //  Update a food, takes object {_id, name, category, options, score, overRide, overRideValue, tags, location}
  food.updateFood = function(foodData) {
    return $http({
      method: 'PUT',
      url: '/food/' + foodData._id,
      data: foodData
    }).then(function(response) {
      console.log('PUT successful:', response.data);
      return response.data;
    });
  }

  //  Delete food, takes object {_id, name, category, options, score, overRide, overRideValue, tags, location}
  food.deleteFood = function(foodData) {
    return $http({
      method: 'DELETE',
      url: '/food/' + foodData.id,
      data: foodData
    }).then(function(response) {
      console.log('DELETE successful:', response);
      return response;
    });
  }

  //  Get foods by category
  food.getCategory = function(catName) {
    return $http.get('food/category/' + catName).then(function(response) {
      //  Returns array of objects {_id, name, category, options, score, overRide, overRideValue, tags, location}
      return response.data;
    })
  }

  //  Search database
  food.search = function(searchTerm) {
    return $http.get('/food/search/' + searchTerm).then(function(response) {
      //  Returns array of objects {_id, name, category, options, score, overRide, overRideValue, tags, location}
      return response.data;
    });
  }

}
