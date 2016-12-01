angular.module('routeApp')
  .controller('FeedbackController', FeedbackController);

function FeedbackController(ReportService, type) {

  var feedback = this;

  console.log('Type:', type);

}
