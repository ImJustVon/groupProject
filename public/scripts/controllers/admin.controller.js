angular.module('routeApp').controller('AdminController', AdminController);

function AdminController($uibModal, $log, $document) {
  var admin = this;
  //admin.items = ['item1', 'item2', 'item3'];

  admin.animationsEnabled = true;


  admin.openNewCategory = function () {
    var modalInstance = $uibModal.open({
      templateUrl: 'views/modals/newCategoryModal.html',
      controller: 'NewCategoryAdminController as new',
      // resolve: {
      //   items: function () {
      //     return admin.items;
      //   }
      // }
    });
  } // end admin.openNewCategory


  admin.openNewFood = function () {
    var modalInstance = $uibModal.open({
      templateUrl: 'views/modals/newFoodModal.html',
      controller: 'NewFoodAdminController as new',
      // resolve: {
      //   items: function () {
      //     return admin.items;
      //   }
      // }
    });
  } // end admin.openNewFood

  admin.openNewOption = function () {
    var modalInstance = $uibModal.open({
      templateUrl: 'views/modals/newOptionModal.html',
      controller: 'NewOptionAdminController as new',
      // resolve: {
      //   items: function () {
      //     return admin.items;
      //   }
      // }
    });
  } // end admin.openNewOption

  admin.openNewLocation = function () {
    var modalInstance = $uibModal.open({
      templateUrl: 'views/modals/newLocationModal.html',
      controller: 'NewLocationAdminController as new',
      // resolve: {
      //   items: function () {
      //     return admin.items;
      //   }
      // }
    });
  } // end admin.openNewLocation

  admin.editFood = function () {
    var modalInstance = $uibModal.open({
      templateUrl: 'views/modals/editFoodModal.html',
      controller: 'EditFoodAdminController as new',
      // resolve: {
      //   items: function () {
      //     return admin.items;
      //   }
      // }
    });
  } // end admin.editFood

  admin.editCategory = function () {
    var modalInstance = $uibModal.open({
      templateUrl: 'views/modals/editCategoryModal.html',
      controller: 'EditCategoryAdminController as edit',
      // resolve: {
      //   items: function () {
      //     return admin.items;
      //   }
      // }
    });
  } // end admin.editFood

  admin.editOption = function () {
    var modalInstance = $uibModal.open({
      templateUrl: 'views/modals/editOptionModal.html',
      controller: 'EditOptionAdminController as edit',
      // resolve: {
      //   items: function () {
      //     return admin.items;
      //   }
      // }
    });
  } // end admin.editFood

  admin.editLocation = function () {
    var modalInstance = $uibModal.open({
      templateUrl: 'views/modals/editLocationModal.html',
      controller: 'EditLocationAdminController as edit',
      // resolve: {
      //   items: function () {
      //     return admin.items;
      //   }
      // }
    });
  } // end admin.editFood







  admin.confirmDelete = function () {
    var modalInstance = $uibModal.open({
      templateUrl: 'views/modals/confirmDeleteModal.html',
      // controller: 'ModalAdminController as modal',
      // resolve: {
      //   items: function () {
      //     return admin.items;
      //   }
      // }
    });
  } // end admin.confirmDelete








} // end AdminController
