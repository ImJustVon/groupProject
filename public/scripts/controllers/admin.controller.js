angular.module('routeApp').controller('AdminController', AdminController);

function AdminController($uibModal, $log, $document) {
  var admin = this;
  //admin.items = ['item1', 'item2', 'item3'];

  admin.animationsEnabled = true;


  admin.openNewCategory = function (size, parentSelector) {
    var modalInstance = $uibModal.open({
      templateUrl: 'views/newCategoryModal.html',
      // controller: 'ModalAdminController as modal',
      // resolve: {
      //   items: function () {
      //     return admin.items;
      //   }
      // }
    });
  } // end admin.openNewCategory


  admin.openNewFood = function (size, parentSelector) {
    var modalInstance = $uibModal.open({
      templateUrl: 'views/newFoodModal.html',
      // controller: 'ModalAdminController as modal',
      // resolve: {
      //   items: function () {
      //     return admin.items;
      //   }
      // }
    });
  } // end admin.openNewFood




} // end AdminController
