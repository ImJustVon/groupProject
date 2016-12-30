angular.module('routeApp').controller('AdminController', AdminController);

function AdminController(FoodService, CategoryService, LocationService, $uibModal, $log, $document, DeleteService, ReportService) {
  var admin = this;
  console.log('AdminController Loaded');

  admin.animationsEnabled = true;

  admin.allFoods = [];
  admin.isOpenNew = false;
  admin.isOpenEdit = false;


  admin.openNewCategory = function () {
    var modalInstance = $uibModal.open({
      templateUrl: 'views/modals/newCategoryModal.html',
      controller: 'NewCategoryAdminController as new',
    });
    modalInstance.result.then(admin.getEverything);
  }; // end admin.openNewCategory

  admin.openNewFood = function () {
    var modalInstance = $uibModal.open({
      templateUrl: 'views/modals/newFoodModal.html',
      controller: 'NewFoodAdminController as new',
    });
    modalInstance.result.then(admin.getEverything);
  }; // end admin.openNewFood

  admin.openNewOption = function () {
    var modalInstance = $uibModal.open({
      templateUrl: 'views/modals/newOptionModal.html',
      controller: 'NewOptionAdminController as new',
    });
    modalInstance.result.then(admin.getEverything);
  }; // end admin.openNewOption

  admin.openNewLocation = function () {
    var modalInstance = $uibModal.open({
      templateUrl: 'views/modals/newLocationModal.html',
      controller: 'NewLocationAdminController as new',
    });
    modalInstance.result.then(admin.getEverything);
  }; // end admin.openNewLocation

  admin.openAdmin = function () {
    var modalInstance = $uibModal.open({
      templateUrl: 'views/modals/newAdminModal.html',
      controller: 'RegisterController as register',
    });
    modalInstance.result.then(admin.getEverything);
  } // end of admin.openAdmin

  admin.editFood = function (food) {
    //  Assign edited food to FoodService
    FoodService.editFood = food;
    var modalInstance = $uibModal.open({
      templateUrl: 'views/modals/editFoodModal.html',
      controller: 'EditFoodAdminController as edit',
    });
    modalInstance.result.then(admin.getEverything);
  }; // end admin.editFood

  admin.editCategory = function () {
    var modalInstance = $uibModal.open({
      templateUrl: 'views/modals/editCategoryModal.html',
      controller: 'EditCategoryAdminController as edit',
    });
    modalInstance.result.then(admin.getEverything);
  }; // end admin.editFood

  admin.editOption = function () {
    var modalInstance = $uibModal.open({
      templateUrl: 'views/modals/editOptionModal.html',
      controller: 'EditOptionAdminController as edit',
    });
    modalInstance.result.then(admin.getEverything);
  }; // end admin.editFood

  admin.editLocation = function () {
    var modalInstance = $uibModal.open({
      templateUrl: 'views/modals/editLocationModal.html',
      controller: 'EditLocationAdminController as edit',
    });
    modalInstance.result.then(admin.getEverything);
  }; // end admin.editFood

  admin.confirmDelete = function (id) {
    DeleteService.giveID(id);
    var modalInstance = $uibModal.open({
      templateUrl: 'views/modals/confirmDeleteModal.html',
      controller: 'DeleteFoodAdminController as delete',
    });
    modalInstance.result.then(admin.getEverything);
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

  //  Function to get all feedback from database
  admin.getFeedback = function () {
    ReportService.getFeedback().then(function (response) {
      console.log('Controller received feedback:', response);
      admin.feedback = response;
      sortFeedback();
    });
  };

  function sortFeedback() {
    admin.resolvedFeedback = admin.feedback.filter(isResolved);
    admin.unresolvedFeedback = admin.feedback.filter(isUnresolved);
  }

  //  Function to check if resolved
  function isResolved(entry) {
    return entry.resolved;
  }

  //  Function to check if unresolved
  function isUnresolved(entry) {
    return !entry.resolved;
  }

  admin.getEverything = function () {
    admin.getFoods();
    admin.getLocations();
    admin.getCategories();
    admin.getFeedback();
  };

  admin.getEverything();

} // end AdminController
