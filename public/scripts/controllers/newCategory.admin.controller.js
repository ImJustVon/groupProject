angular.module('routeApp').controller('NewCategoryAdminController', NewCategoryAdminController);

function NewCategoryAdminController(CategoryService, $uibModalInstance) {

  var admin = this;

  //  admin.name -> new category name

  //  Post the new category
  admin.addCategory = function() {
    var categoryData = {
      name: admin.name.replace(/ /g,'_'), //What is this?
      imageLocation: admin.image,
    }
    CategoryService.postCategory(categoryData).then(function(response) {
      //  Do something
      console.log('Response:', response);
      admin.getCategories();
    });
  }

  //  Get all categories
  admin.getCategories = function() {
    CategoryService.getCategories().then(function(response) {
      console.log('GET successful:', response);
    });
  }

  admin.cancel = function() {
    $uibModalInstance.close();
  }

}
