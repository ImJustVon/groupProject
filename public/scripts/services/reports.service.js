angular.module('routeApp')
  .service('ReportService', ReportService);

function ReportService($http) {

  var report = this;

  //  Get search terms
  report.getSearchReport = function() {
    return $http.get('/reports').then(function(response) {
      //  Returns array of objects {_id, word, count}
      console.log('Search history:', response.data);
      return response.data;
    });
  }

  //  Delete search term, takes {_id}
  report.deleteSearchReport = function(searchData) {
    return $http({
      method: 'DELETE',
      url: '/reports/' + searchData._id,
      data: searchData
    }).then(function(response) {
      console.log('DELETE successful:', response);
      return response;
    });
  }

}
