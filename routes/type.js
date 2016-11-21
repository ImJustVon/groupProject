const router = require('express').Router();
const Type = require('../models/type');

/*
gets all the types of options
 */
router.get('/', function (req, res) {
  Type.find({}).then(function (dataFromTheDatabase) {
    res.send(dataFromTheDatabase);
  });
});

/*
adds a new type to the database
expected form
req.body.name = String with the product name
req.body.display = string of how it will display
 */
router.post('/', function (req, res) {
  var typeToSave = new Type(req.body);
  typeToSave.save().then(function () {
    console.log('Type was saved');
    res.sendStatus(201);
  });
});

/*
updates a type with _id of /:id
expected form
req.body.name = String with the product name
req.body.display = string of how it will display
 */
router.put('/:id', function (req, res) {
  //matches _id with id then updates all the values
  Type.update({ _id: req.params.id }, req.body).then(function () {
    console.log('Updated a type');
    res.sendStatus(201);
  });
});

/*
a delete request to /:id where :id is the _id of the document
 */
router.delete('/:id', function (req, res) {
  console.log('trying to remove: ', req.params.id);
  Type.remove({ _id: req.params.id }).then(function () {
    res.sendStatus(204);
  });
});

module.exports = router;
