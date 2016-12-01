angular.module('routeApp')
  .controller('FeedbackController', FeedbackController);

function FeedbackController(ReportService, type, $uibModalInstance) {

  var feedback = this;

  feedback.submitFeedback = function() {
    var feedbackToSubmit = {
      type: type,
      content: feedback.content
    };
    ReportService.postFeedback(feedbackToSubmit).then(function(response) {
      console.log('Feedback POST successful:', response);
    });
    $uibModalInstance.close();
  }

  feedback.cancel = function() {
    $uibModalInstance.close();
  }

}
