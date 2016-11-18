angular.module('routeApp')
  .service('FoodService', FoodService)

//  Service holds data accessed across multiple controllers
function FoodService ($http) {

  var nav = this;

  //  Search database
  nav.search = function(searchTerm) {
    return $http.get('/search/' + searchTerm).then(function(result) {
      //  Returns array of objects {_id, name, category, options, score, overRide, overRideValue, tags}
      return result.data;
    });
  }

}
