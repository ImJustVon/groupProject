angular.module('routeApp').controller('NewCategoryAdminController', NewCategoryAdminController);

function NewCategoryAdminController(CategoryService, $uibModalInstance) {

  var admin = this;

  admin.language_list = [{ name: 'english', url: 'https://raw.githubusercontent.com/stevenrskelton/flag-icon/master/png/16/country-4x3/gb.png' }, { name: 'italian', url: 'https://raw.githubusercontent.com/stevenrskelton/flag-icon/master/png/16/country-4x3/it.png' }];
  admin.defaults = [
    { name: 'Apple', url: '/assets/images/category-items/apple.png' },
    { name: 'Carrot', url: '/assets/images/category-items/carrot.png' },
    { name: 'Cheese', url: '/assets/images/category-items/cheese.png' },
    { name: 'Grain', url: '/assets/images/category-items/grain.png' },
    { name: 'Oil', url: '/assets/images/category-items/olive-oil.png' },
    { name: 'Steak', url: '/assets/images/category-items/steak.png' }, ];

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
