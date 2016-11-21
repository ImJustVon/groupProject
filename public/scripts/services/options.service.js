angular.module('routeApp')
  .service('OptionService', OptionService);

function OptionService($http) {

  var option = this;

  //  Get all options in database
  option.getOptions = function() {
    return $http.get('/options').then(function(response) {
      //  Returns array of objects {_id, name, modifier, type}
      return response.data;
    });
  }

  //  Post an option, needs {name, modifier, type}
  option.postOption = function(optionData) {
    return $http({
      method: 'POST',
      url: '/options',
      data: optionData
    }).then(function(response) {
      //  Returns array of objects {_id, name, modifier, type}
      console.log('POST successful:', response.data);
      return response.data;
    });
  }

  //  Update an existing option
  option.updateOption = function(optionData) {
    return $http({
      method: 'PUT',
      url: '/options/' + optionData._id,
      data: optionData
    }).then(function(response) {
      //  Returns array of objects {_id, name, modifier, type}
      console.log('PUT successful:', response.data);
      return response.data;
    });
  }

  //  Delete an option
  option.deleteOption = function(optionData) {
    return $http({
      method: 'DELETE',
      url: '/options/' + optionData._id,
      data: optionData
    }).then(function(response) {
      console.log('DELETE successful');
    });
  }

  //  Search the option database
  option.search = function(searchTerm) {
    return $http.get('/options/search/' + searchTerm).then(function(response) {
      //  Returns array of objects {_id, name, modifier, type}
      return response.data;
    });
  }

  //  Get all option types
  option.getOptionTypes = function() {
    return $http.get('/type').then(function(response) {
      return response.data;
    });
  }

  //  Adds option type {name, display}
  option.addOptionType = function(typeData) {
    return $http({
      method: 'POST',
      url:'/type',
      data: typeData
    }).then(function(response) {
      return response.data;
    });
  }

}
