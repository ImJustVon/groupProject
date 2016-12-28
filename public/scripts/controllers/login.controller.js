angular.module('routeApp')
  .controller('LoginController', LoginController);

function LoginController($http, $location, authorize) {
  console.log('LoginController Loaded');
  var login = this;

  login.login = function() {
    console.log('Logging in...');
    authorize.login(login.username, login.password).then(function(response){
      console.log('Response from login router: ', response);
      $location.path('/admin');
    }, function(err){
      console.log('Error logging in', err);
    });
  };
}
