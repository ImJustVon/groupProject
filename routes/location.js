const router = require('express').Router();
const Location = require('../models/location');

/*
Gets the whole location database
 */
router.get('/', function (req, res) {
  Location.find({}).then(function (dataFromTheDatabase) {
    console.log('Documents from mongo ', dataFromTheDatabase);
    res.send(dataFromTheDatabase);
  });
});

/*
expecting this format
req.body.name = name String
 */
router.post('/', function (req, res) {
  var locationToSave = new Location(req.body);
  locationToSave.save().then(function () {
    console.log('Saved a new location');
    res.sendStatus(201);
  });
});

/*
expecting this format
req.body.name = name String
 */
router.put('/:id', function (req, res) {
  Location.update({ _id: req.params.id }, req.body).then(function () {
    console.log('updated a location');
    res.sendStatus(201);
  });
});

/*
a delete request to /:id where :id is the _id of the document
 */
router.delete('/:id', function (req, res) {
  Location.remove({ _id: req.params.id }).then(function () {
    res.sendStatus(204);
  });
});

module.exports = router;
