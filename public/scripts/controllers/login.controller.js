angular.module('routeApp')
  .controller('LoginController', LoginController);

function LoginController($http) {
  console.log('LoginController Loaded');
  var login = this;

  login.login = function() {
    console.log('Logging in...');
    console.log(login.username, login.password);
    // $http.post('/login', {
    //   username: login.username,
    //   password: login.password
    // }).then(function(response){
    //   console.log(response);
    //   // return response.data
    // }, function(err){
    //   console.log('Error logging in,' err);
    // });
  };

}
