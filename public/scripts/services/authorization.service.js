angular.module('routeApp')
       .service('authorize', AuthorizationService);

function AuthorizationService($http) {
  var auth = this;

  // auth.role = '';

  auth.login = function(username, password) {
    return $http.post('/login', {
      username: username,
      password: password,
      role: 'Administrative'
  }).then(function(response){
      // auth.role = response.config.data.role;
      return response.config.data;
    });
  };

// This is not neccessary right now but will be useful if user login is implmented
  // auth.checkRole = function() {
  // }

}// End of AuthorizationService
