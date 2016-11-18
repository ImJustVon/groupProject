angular.module('routeApp').controller('AdminController', AdminController);

function AdminController($uibModal, $log, $document) {
  var admin = this;
  //admin.items = ['item1', 'item2', 'item3'];

  admin.animationsEnabled = true;

  admin.open = function (size, parentSelector) {
    var modalInstance = $uibModal.open({
      templateUrl: 'views/demoModal.html',
      controller: 'ModalAdminController as modal';
      // resolve: {
      //   items: function () {
      //     return admin.items;
      //   }
      // }
    });
  } // end admin.open


} // end AdminController
