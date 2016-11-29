angular.module('routeApp').controller('DeleteFoodAdminController', DeleteFoodAdminController);

function DeleteFoodAdminController($uibModalInstance) {

  var admin = this;


  admin.cancel = function() {
    $uibModalInstance.close();
  }

}
