angular.module('routeApp')
  .controller('NewOptionAdminController', NewOptionAdminController);

function NewOptionAdminController(OptionService, $uibModalInstance) {

  var admin = this;
  admin.typeData = {};
  admin.typeData.display='checkbox';

  //  Post a new option
  admin.addOption = function() {
    var optionData = {
      name: admin.name.replace(/ /g,'_'),
      modifier: admin.modifier,
      type: admin.type.replace(/ /g,'_'),
    }
    OptionService.postOption(optionData).then(function(response) {
      console.log('POST successful:', response);
      admin.name = '';
      admin.modifier = '';
    });
  }

  //  Get all option types, store in admin.types
  admin.getOptionTypes = function() {
    OptionService.getOptionTypes().then(function(response) {
      console.log('Got option types, in admin.types:', response);
      admin.types = response;
    });
  }

  //  Adds a type for options
  admin.addOptionType = function() {
    OptionService.addOptionType(admin.typeData).then(function(response) {
      console.log('POSTed option type:', response);
      admin.getOptionTypes();
    });
  }

  admin.cancel = function() {
    $uibModalInstance.close();
  }

  //  Called on modal open
  admin.getOptionTypes();

}
