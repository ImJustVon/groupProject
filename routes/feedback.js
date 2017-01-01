const router = require('express').Router();
const Feedback = require('../models/feedback');

/*
Get all feedback items from the database
*/
router.get('/', function (req, res) {
  Feedback.find({}).then(function (dataFromTheDatabase) {
    console.log('Feedback documents from Mongo:', dataFromTheDatabase);
    res.send(dataFromTheDatabase);
  });
});

/*
Create a new feedback item:
req.body.type = string describing type of feedback, created in client
req.body.content = string with feedback content
req.body.date = date of feedback creation, created in server
req.body.resolved = status of feedback item, initially set to false
*/
router.post('/', function (req, res) {
  var feedbackToSave = new Feedback({
    type: req.body.type,
    content: req.body.content,
    date: Date.now(),
    resolved: false,
  });
  console.log('Feedback to save:', feedbackToSave);
  feedbackToSave.save().then(function () {
    console.log('Saved feedback entry');
    res.sendStatus(201);
  }).catch(function (err) {
    console.log('Error saving feedback:', err);
    res.sendStatus(500);
  });
});

/*
Updates a feedback entry
Takes form {_id, type, content, date, resolved}
*/
router.put('/:id', function (req, res) {
  Feedback.update({ _id: req.params.id }, req.body).then(function () {
    console.log('Updated feedback entry');
    res.sendStatus(204);
  });
});

/*
Deletes a feedback entry by _id
*/
router.delete('/:id', function (req, res) {
  console.log('Deleting:', req.params.id);
  Feedback.remove({ _id: req.params.id }).then(function () {
    res.sendStatus(204);
  });
});

module.exports = router;
