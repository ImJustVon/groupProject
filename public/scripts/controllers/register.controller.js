angular.module('routeApp')
       .controller('RegisterController', RegisterController);

function RegisterController($http, $location, $uibModalInstance) {
  console.log('RegisterController Loaded');
  var register = this;

  register.confirm = function() {
    console.log('Registering a new user...');
    $http.post('/register', {
      username: register.username,
      password: register.password
    }).then(function(){
      $location.path('/admin');
    }, function(err){
        console.log('Error registering new admin!');
    });
  };
}// End of controller
