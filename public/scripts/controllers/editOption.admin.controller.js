angular.module('routeApp').controller('EditOptionAdminController', EditOptionAdminController);

function EditOptionAdminController($uibModalInstance, OptionService) {

  var admin = this;

  // Get option types for food creation/updating
  admin.getOptionTypes = function() {
    OptionService.getOptionTypes().then(function(response) {
      console.log('Got option types, in admin.types:', response);
      admin.types = response;
    });
  }

  //  Get options for food creation/updating
  admin.getOptions = function() {
    OptionService.getOptions().then(function(response) {
      console.log('GET successful:', response);
      admin.options = response;
      console.log('Options:', admin.options);
    });
  }

  admin.getOptionTypes();
  admin.getOptions();




  admin.cancel = function() {
    $uibModalInstance.close();
  }

}
