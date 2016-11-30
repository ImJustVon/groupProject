angular.module('routeApp')
  .service('DeleteService', DeleteService);

function DeleteService($http) {
  _this = this;

  //assigns an id to the id so it can be used in modals
  _this.giveID = function (id) {
    _this.id = id;
  };

  _this.deleteFood = function () {
    return $http.delete('/food/' + _this.id).then(function (response) {
      return response;
    });
  };
}
