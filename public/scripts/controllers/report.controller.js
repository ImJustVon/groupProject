angular.module('routeApp')
  .controller('ReportController', ReportController);

function ReportController(ReportService) {

  var report = this;

  //  Store feedback objects and search terms
  report.feedback = [];
  report.resolvedFeedback = [];
  report.unresolvedFeedback = [];
  report.searchData = [];

  //  This information will be displayed on the feedback screen
  report.current = [];

  //  This variable determines which list is assigned to report.current
  report.selected = 'all';

  //  Function to get all feedback from database
  report.getFeedback = function() {
    ReportService.getFeedback().then(function(response) {
      console.log('Controller received feedback:', response);
      report.feedback = response;
      sortFeedback();
      report.assignList(report.selected);
    });
  }

  //  Function to get all search data from database
  report.getSearchReport = function() {
    ReportService.getSearchReport().then(function(response) {
      console.log('Controller received search data:', response);
      report.searchData = response;
    });
  }

  //  Function to add search information to database, takes string 'searchterm'
  report.addSearchReport = function(searchterm) {
    ReportService.addSearchReport(searchterm).then(function(response) {
      console.log('Got response from service:', response);
    });
  }

  //  Function to delete search data, takes {_id}
  report.deleteSearchReport = function(searchData) {
    ReportService.deleteSearchReport(searchData).then(function(response) {
      console.log('Controller received response:', response);
      report.getSearchReport();
    });
  }

  //  Function to add feedback
  report.addFeedback = function (feedbackData) {
    ReportService.postFeedback(feedbackData).then(function(response) {
      console.log('Controller received response:', reponse);
    });
  }

  //  Function to update existing feedback, refresh page view
  report.updateFeedback = function(feedback) {
    ReportService.updateFeedback(feedback).then(function(response) {
      console.log('Updated feedback:', response);
      report.getFeedback();
    });
  }

  //  Function to delete a search term, refresh page view.  Feedback object
  report.deleteFeedback = function(feedback) {
    ReportService.deleteFeedback(feedback).then(function(response) {
      console.log('Controller received response:', response);
      report.getFeedback();
    });
  }

  //  Function to change reported status
  report.changeFeedbackStatus = function(feedback) {
    feedback.resolved = !feedback.resolved;
    report.updateFeedback(feedback);
  }

  //  Function to check if resolved
  function isResolved(entry) {
    return entry.resolved;
  }

  //  Function to check if unresolved
  function isUnresolved(entry) {
    return !entry.resolved;
  }

  //  Function to sort all feedback into two arrays by status
  function sortFeedback() {
    report.resolvedFeedback = report.feedback.filter(isResolved);
    report.unresolvedFeedback = report.feedback.filter(isUnresolved);
  }

  //  Function to assign the list displayed on screen
  report.assignList = function(value) {
    if (value == 'all') {
      report.current = report.feedback;
    } else if (value == 'unresolved') {
      report.current = report.unresolvedFeedback;
    } else if (value == 'resolved') {
      report.current = report.resolvedFeedback;
    }
    report.getFeedback
  }

  //  Get feedback and search information on page load
  report.getFeedback();
  report.getSearchReport();
  console.log('Feedback:', report.feedback);
}
