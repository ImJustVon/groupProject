angular.module('routeApp')
  .service('NavService', NavService)

//  Service holds data accessed across multiple controllers
function NavService ($http) {

  var nav = this;

  //  Search database
  nav.search = function(searchTerm) {
    return $http.get('/search/' + searchTerm).then(function(result) {
      //  Returns array of objects {_id, name, category, options, score, overRide, overRideValue, tags}
      return result.data;
    });
  }

}
