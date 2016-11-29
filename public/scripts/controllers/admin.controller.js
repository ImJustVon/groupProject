angular.module('routeApp').controller('AdminController', AdminController);

function AdminController(FoodService, LocationService, $uibModal, $log, $document) {
  var admin = this;

  admin.animationsEnabled = true;

  admin.allFoods = [];

  admin.openNewCategory = function () {
    var modalInstance = $uibModal.open({
      templateUrl: 'views/modals/newCategoryModal.html',
      controller: 'NewCategoryAdminController as new',
    });
  } // end admin.openNewCategory


  admin.openNewFood = function () {
    var modalInstance = $uibModal.open({
      templateUrl: 'views/modals/newFoodModal.html',
      controller: 'NewFoodAdminController as new',
    });
  } // end admin.openNewFood

  admin.openNewOption = function () {
    var modalInstance = $uibModal.open({
      templateUrl: 'views/modals/newOptionModal.html',
      controller: 'NewOptionAdminController as new',
    });
  } // end admin.openNewOption

  admin.openNewLocation = function () {
    var modalInstance = $uibModal.open({
      templateUrl: 'views/modals/newLocationModal.html',
      controller: 'NewLocationAdminController as new',
    });
  } // end admin.openNewLocation

  admin.editFood = function () {
    var modalInstance = $uibModal.open({
      templateUrl: 'views/modals/editFoodModal.html',
      controller: 'EditFoodAdminController as new',
    });
  } // end admin.editFood

  admin.editCategory = function () {
    var modalInstance = $uibModal.open({
      templateUrl: 'views/modals/editCategoryModal.html',
      controller: 'EditCategoryAdminController as edit',
    });
  } // end admin.editFood

  admin.editOption = function () {
    var modalInstance = $uibModal.open({
      templateUrl: 'views/modals/editOptionModal.html',
      controller: 'EditOptionAdminController as edit',
    });
  } // end admin.editFood

  admin.editLocation = function () {
    var modalInstance = $uibModal.open({
      templateUrl: 'views/modals/editLocationModal.html',
      controller: 'EditLocationAdminController as edit',
    });
  } // end admin.editFood


  admin.confirmDelete = function () {
    var modalInstance = $uibModal.open({
      templateUrl: 'views/modals/confirmDeleteModal.html',
      // controller: 'ModalAdminController as modal',
    });
  } // end admin.confirmDelete


  //  Function to get all foods in the database
  admin.getFoods = function() {
    FoodService.getFoods().then(function(response) {
      console.log('GET successful:', response);
      admin.allFoods = response;


      // Food scoring function
      // if (admin.allFoods.score >= 81) {
      //   admin.allFoods.score = 'A';
      // } else if (admin.allFoods.score >= 61 && admin.allFoods.score < 81) {
      //   admin.allFoods.score = 'B';
      // } else if (admin.allFoods.score >= 41 && admin.allFoods.score < 61) {
      //   admin.allFoods.score = 'C';
      // } else if (admin.allFoods.food.score >= 26 && admin.allFoods.score < 41) {
      //   admin.allFoods.score = 'D';
      // } else if (admin.allFoods.score < 26) {
      //   admin.allFoods.score = 'F';
      // }

    });
  }

  //  Get locations for food creation/updating
  admin.getLocations = function() {
    LocationService.getLocations().then(function(response) {
      console.log('GET successful:', response);
      admin.locations = response;
    });
  }


  admin.getFoods();
  admin.getLocations();



} // end AdminController
