angular.module('routeApp')
  .controller('NewOptionAdminController', NewOptionAdminController);

function NewOptionAdminController(OptionService, $uibModalInstance) {

  var admin = this;

  //  Post a new option
  admin.addOption = function() {
    var optionData = {
      name: admin.name,
      modifier: admin.modifier,
      type: admin.type
    }
    OptionService.postOption(optionData).then(function(response) {
      console.log('POST successful:', response);
    });
  }

}
