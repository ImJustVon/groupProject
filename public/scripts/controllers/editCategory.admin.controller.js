angular.module('routeApp').controller('EditCategoryAdminController', EditCategoryAdminController);

function EditCategoryAdminController($uibModalInstance, CategoryService) {

  var admin = this;

  //  Get categories for food creation/updating
  admin.getCategories = function() {
    CategoryService.getCategories().then(function(response) {
      console.log('GET successful:', response);
      admin.categories = response;
    });
  }


  admin.cancel = function() {
    $uibModalInstance.close();
  }

  admin.getCategories();

}
