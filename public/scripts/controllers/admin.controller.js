angular.module('routeApp').controller('AdminController', AdminController);

function AdminController(FoodService, CategoryService, LocationService, $uibModal, $log, $document, DeleteService) {
  var admin = this;

  admin.animationsEnabled = true;

  admin.allFoods = [];

  admin.openNewCategory = function () {
    var modalInstance = $uibModal.open({
      templateUrl: 'views/modals/newCategoryModal.html',
      controller: 'NewCategoryAdminController as new',
    });
  }; // end admin.openNewCategory

  admin.openNewFood = function () {
    var modalInstance = $uibModal.open({
      templateUrl: 'views/modals/newFoodModal.html',
      controller: 'NewFoodAdminController as new',
    });
  }; // end admin.openNewFood

  admin.openNewOption = function () {
    var modalInstance = $uibModal.open({
      templateUrl: 'views/modals/newOptionModal.html',
      controller: 'NewOptionAdminController as new',
    });
  }; // end admin.openNewOption

  admin.openNewLocation = function () {
    var modalInstance = $uibModal.open({
      templateUrl: 'views/modals/newLocationModal.html',
      controller: 'NewLocationAdminController as new',
    });
  }; // end admin.openNewLocation

  admin.editFood = function (food) {
    //  Assign edited food to FoodService
    FoodService.editFood = food;
    var modalInstance = $uibModal.open({
      templateUrl: 'views/modals/editFoodModal.html',
      controller: 'EditFoodAdminController as edit',
    });
    modalInstance.result.then(admin.getFoods);
  }; // end admin.editFood

  admin.editCategory = function () {
    var modalInstance = $uibModal.open({
      templateUrl: 'views/modals/editCategoryModal.html',
      controller: 'EditCategoryAdminController as edit',
    });
  }; // end admin.editFood

  admin.editOption = function () {
    var modalInstance = $uibModal.open({
      templateUrl: 'views/modals/editOptionModal.html',
      controller: 'EditOptionAdminController as edit',
    });
  }; // end admin.editFood

  admin.editLocation = function () {
    var modalInstance = $uibModal.open({
      templateUrl: 'views/modals/editLocationModal.html',
      controller: 'EditLocationAdminController as edit',
    });
  }; // end admin.editFood

  admin.confirmDelete = function (id) {
    DeleteService.giveID(id);
    var modalInstance = $uibModal.open({
      templateUrl: 'views/modals/confirmDeleteModal.html',
      controller: 'DeleteFoodAdminController as delete',
    });
  }; // end admin.confirmDelete


  //  Function to get all foods in the database
  admin.getFoods = function () {
    FoodService.getFoods().then(function (response) {
      console.log('GET successful:', response);
      admin.allFoods = response;
    });
  };

  //  Get locations for food creation/updating
  admin.getLocations = function () {
    LocationService.getLocations().then(function (response) {
      console.log('GET successful:', response);
      admin.locations = response;
      LocationService.locations = admin.locations;
    });
  };

  //  Get categories for food creation/updating
  admin.getCategories = function () {
    CategoryService.getCategories().then(function (response) {
      console.log('GET successful:', response);
      admin.categories = response;
      CategoryService.categories = admin.categories;
    });
  };

  admin.getFoods();
  admin.getLocations();
  admin.getCategories();

} // end AdminController
