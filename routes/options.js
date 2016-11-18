const router = require('express').Router();
const Option = require('../models/option');

/*
Search request is sent to /option/search/word seraching for
Searches for the phrase in the name and the tags to match
Returns the document with matches
 */
router.get('/search/:word', function (req, res) {
  //checks the name for a match and the tags array for a matching index then returns the document
  Option.find({ name: word }).then(function (dataFromTheDatabase) {
    console.log('Search result ', dataFromTheDatabase);
    res.send(dataFromTheDatabase);
  });
});

/*
Gets the whole options database
 */
router.get('/', function (req, res) {
  Option.find({}).then(function (dataFromTheDatabase) {
    console.log('Documents from mongo ', dataFromTheDatabase);
    res.send(dataFromTheDatabase);
  });
});

/*
expecting this format
req.body.name = name String
req.body.score = modifing number
req.body.type = type string (ex. condement, bun, etc.)
 */
router.post('/', function (req, res) {
  var optionToSave = new Option(req.body);
  optionToSave.save().then(function () {
    console.log('Saved a new option');
    res.sendStatus(201);
  });
});

module.exports = router;
