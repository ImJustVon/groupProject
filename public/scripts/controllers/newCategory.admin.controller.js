angular.module('routeApp').controller('NewCategoryAdminController', NewCategoryAdminController);

function NewCategoryAdminController(CategoryService, $uibModalInstance) {

  var admin = this;

  admin.itemArray = [
    { id: 1, name: 'first' },
    { id: 2, name: 'second' },
    { id: 3, name: 'third' },
    { id: 4, name: 'fourth' },
    { id: 5, name: 'fifth' },
];

  admin.selectedItem = admin.itemArray[0];

  admin.defaults = [
    { url: '/assets/images/category-items/apple.png' },
    { url: '/assets/images/category-items/carrot.png' },
    { url: '/assets/images/category-items/cheese.png' },
    { url: '/assets/images/category-items/grain.png' },
    { url: '/assets/images/category-items/olive-oil.png' },
    { url: '/assets/images/category-items/steak.png' }, ];

  //  admin.name -> new category name

  //  Post the new category
  admin.addCategory = function () {
    var categoryData = {
      name: admin.name.replace(/ /g, '_'), //What is this?
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
    var categoryData = {
      name: admin.name.replace(/ /g, '_'), //What is this?
      file: admin.file,
    };
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
