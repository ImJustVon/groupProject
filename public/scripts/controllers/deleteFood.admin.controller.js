angular.module('routeApp').controller('DeleteFoodAdminController', DeleteFoodAdminController);

function DeleteFoodAdminController(DeleteService, $uibModalInstance) {

  var admin = this;

  admin.confirmDelete = function () {
    DeleteService.deleteFood();
    $uibModalInstance.close();
  };

  admin.cancel = function () {
    $uibModalInstance.close();
  };

}
