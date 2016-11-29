angular.module('routeApp').controller('EditOptionAdminController', EditOptionAdminController);

function EditOptionAdminController($uibModalInstance, OptionService) {

  var admin = this;

  admin.optionsList = [];

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

  // Populate options based on option type
  admin.populateOptions = function(type) {
    console.log('type', type);
    admin.optionsList = [];
    for (i = 0; i < admin.options.length; i++) {
      if (admin.options[i].type == type) {
        admin.optionsList.push(admin.options[i]);
      }
    }
    console.log('options.list:', admin.optionsList);
  }

  admin.getOptionTypes();
  admin.getOptions();




  admin.cancel = function() {
    $uibModalInstance.close();
  }

}
