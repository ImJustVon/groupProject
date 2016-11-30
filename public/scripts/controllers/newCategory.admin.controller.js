angular.module('routeApp').controller('NewCategoryAdminController', NewCategoryAdminController);

function NewCategoryAdminController(CategoryService, $uibModalInstance) {

  var admin = this;

  admin.defaults = [
    { name: 'Apple', path: '/assets/images/category-items/apple.png' },
    { name: 'Carrot', path: '/assets/images/category-items/carrot.png' },
    { name: 'Cheese', path: '/assets/images/category-items/cheese.png' },
    { name: 'Grain', path: '/assets/images/category-items/grain.png' },
    { name: 'Oil', path: '/assets/images/category-items/olive-oil.png' },
    { name: 'Steak', path: '/assets/images/category-items/steak.png' },];

  //  Post the new category
  admin.addCategory = function () {
    var categoryData = {
      name: admin.name.replace(/ /g, '_'),
      file: admin.file,
    };
    CategoryService.postCategory(categoryData).then(function (response) {
      //  Do something
      console.log('Response:', response);
      admin.getCategories();
    });
  };

  // Post the new category with a default image
  admin.addCategoryDefault = function () {
    console.log('admin.file.selected: ', admin.file.selected);
    console.log('admin.name: ', admin.name);
    var categoryData = {
      name: admin.name,
      file: admin.file.selected,
    };
    console.log('categoryData', categoryData);
    CategoryService.postCategoryDefault(categoryData).then(function (response) {
      //  Do something
      console.log('Response:', response);
      admin.getCategories();
    });
  };

  //  Get all categories
  admin.getCategories = function () {
    CategoryService.getCategories().then(function (response) {
      console.log('GET successful:', response);
    });
  };

  admin.cancel = function () {
    $uibModalInstance.close();
  };
}
