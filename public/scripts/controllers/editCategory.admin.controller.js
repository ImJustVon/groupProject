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

  admin.updateCategory = function(category) {
    console.log('Update category data:', category);
  }

  admin.deleteCategory = function(category) {
    console.log('Delete category data:', category);
  }

  admin.cancel = function() {
    $uibModalInstance.close();
  }

  admin.getCategories();

}
