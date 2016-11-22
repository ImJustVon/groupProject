angular.module('routeApp').controller('EditOptionAdminController', EditOptionAdminController);

function EditOptionAdminController($uibModalInstance) {

  var admin = this;

  admin.cancel = function() {
    $uibModalInstance.close();
  }

}
