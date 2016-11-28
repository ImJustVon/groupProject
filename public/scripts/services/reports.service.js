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

  //  Get all feedback
  report.getFeedback = function() {
    return $http.get('/feedback').then(function(response) {
      //  Returns array of objects {_id, type, content, date, resolved}
      console.log('Feedback reports:', response);
      return response;
    });
  }

  //  Update feedback, takes {_id, type, content, date, resolved}
  report.updateFeedback = function(feedback) {
    return $http({
      method: 'PUT',
      url: '/feedback/' + feedback._id,
      data: feedback
    }).then(function(response) {
      //  Returns array of objects {_id, type, content, date, resolved}
      console.log('Service received updated feedback:', response.data);
      return response.data;
    });
  }

  //  Delete feedback, takes {_id}
  report.deleteFeedback = function(feedback) {
    return $http({
      method: 'DELETE',
      url: '/feedback/' + feedback._id,
      data: feedback
    }).then(function(response) {
      console.log('DELETE successful:', response);
      return response;
    });
  }

}
