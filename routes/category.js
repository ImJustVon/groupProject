const router = require('express').Router();
const Category = require('../models/category');

/*
Gets the whole category database
 */
router.get('/', function (req, res) {
  Category.find({}).then(function (dataFromTheDatabase) {
    console.log('Documents from mongo ', dataFromTheDatabase);
    res.send(dataFromTheDatabase);
  });
});

/*
expecting this format
req.body.name = name String
 */
router.post('/', function (req, res) {
  var categoryToSave = new Category(req.body);
  categoryToSave.save().then(function () {
    console.log('Saved a new category');
    res.sendStatus(201);
  });
});

/*
expecting this format
req.body.name = name String
 */
router.put('/:id', function (req, res) {
  Category.update({ _id: id }, { $set: {
    name: req.body.name,
  }, }).then(function () {
    console.log('updated a category');
    res.sendStatus(201);
  });
});

/*
a delete request to /:id where :id is the _id of the document
 */
router.delete('/:id', function (req, res) {
  Category.remove({ id }).then(function () {
    res.sendStatus(204);
  });
});

module.exports = router;
