angular.module('routeApp')
  .controller('LoginController', LoginController);

function LoginController($http, $location) {
  console.log('LoginController Loaded');
  var login = this;

  login.login = function() {
    console.log('Logging in...');
    $http.post('/login', {
      username: login.username,
      password: login.password
    }).then(function(response){
      console.log(response);
    }, function(err){
      console.log('Error logging in', err);
    });
  };
}
