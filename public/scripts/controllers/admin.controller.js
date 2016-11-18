angular.module('routeApp').controller('AdminController', AdminController);

function AdminController($uibModal, $log, $document) {
  var admin = this;
  //admin.items = ['item1', 'item2', 'item3'];

  admin.animationsEnabled = true;


  admin.openNewCategory = function () {
    var modalInstance = $uibModal.open({
      templateUrl: 'views/modals/newCategoryModal.html',
      // controller: 'ModalAdminController as modal',
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
      // controller: 'ModalAdminController as modal',
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
      // controller: 'ModalAdminController as modal',
      // resolve: {
      //   items: function () {
      //     return admin.items;
      //   }
      // }
    });
  } // end admin.openNewOption




} // end AdminController
