angular.module('routeApp')
  .service('FoodService', FoodService)

//  Service holds data accessed across multiple controllers
function FoodService ($http) {

  var food = this;

  //  Get all foods
  food.getFoods = function() {
    return $http.get('/food').then(function(response) {
      //  Returns array of objects {_id, name, category, options, score, overRide, overRideValue, tags}
      return response.data;
    });
  }

  //  Post a food, takes object {name, category, options, score, overRide, overRideValue, tags}
  food.postFood = function(foodData) {
    return $http({
      method: 'POST',
      url: '/food',
      data: foodData
    }).then(function(response) {
      console.log('POST successful:', response.data);
      return response.data;
    });
  }

  //  Update a food, takes object {_id, name, category, options, score, overRide, overRideValue, tags}
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

  //  Delete food, takes object {_id, name, category, options, score, overRide, overRideValue, tags}
  food.deleteFood = function(foodData) {
    return $http({
      method: 'DELETE',
      url: '/food/' + foodData.id,
      data: foodData
    }).then(function(response) {
      console.log('DELETE successful');
    });
  }

  //  Get foods by category
  food.getCategory = function(catName) {
    return $http.get('food/category/' + catName).then(function(response) {
      //  Returns array of objects {_id, name, category, options, score, overRide, overRideValue, tags}
      return response.data;
    })
  }

  //  Search database
  food.search = function(searchTerm) {
    return $http.get('/food/search/' + searchTerm).then(function(response) {
      //  Returns array of objects {_id, name, category, options, score, overRide, overRideValue, tags}
      return response.data;
    });
  }

}
