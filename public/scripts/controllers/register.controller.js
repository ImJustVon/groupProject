angular.module('routeApp')
       .controller('RegisterController', RegisterController);

function RegisterController($http, $location, $uibModalInstance) {
  console.log('RegisterController Loaded');
  var register = this;

  register.confirm = function() {
    console.log('Registering a new user...');
    console.log(register.username, register.password);
    $http.post('/register', {
      username: register.username,
      password: register.password
    }).then(function(){
      $location.path('/admin');
    }, function(err){
        console.log('Error registering new admin!', err);
    });
  };

  register.cancel = function() {
      $uibModalInstance.close();
  };
}// End of controller
