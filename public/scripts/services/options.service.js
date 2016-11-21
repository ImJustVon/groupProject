angular.module('routeApp')
  .service('OptionService', OptionService);

function OptionService($http) {

  var option = this;

  //  Get all options in database
  option.getOptions = function() {
    return $http.get('/options').then(function(response) {
      //  Returns array of objects {_id, name, score, type}
      return response.data;
    });
  }

  //  Post an option, needs {name, score, type}
  option.postOption = function(optionData) {
    return $http({
      method: 'POST',
      url: '/options',
      data: optionData
    }).then(function(response) {
      //  Returns array of objects {_id, name, score, type}
      console.log('POST successful:', response.data);
    });
  }

}
