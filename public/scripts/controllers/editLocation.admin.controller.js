angular.module('routeApp').controller('EditLocationAdminController', EditLocationAdminController);

function EditLocationAdminController($uibModalInstance) {

  var admin = this;

  admin.cancel = function() {
    $uibModalInstance.close();
  }

}
