angular.module('routeApp').controller('EditCategoryAdminController', EditCategoryAdminController);

function EditCategoryAdminController($uibModalInstance) {

  var admin = this;

  admin.cancel = function() {
    $uibModalInstance.close();
  }

}
