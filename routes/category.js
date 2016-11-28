const router = require('express').Router();
const Category = require('../models/category');
const fs = require('fs');
const multer = require('multer');
const path = require('path');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/assets/images/category-items');
      },

    filename: function (req, file, cb) {
        cb(null, Date.now().toString() + path.extname(file.originalname));
      },
  });
const upload = multer({ storage: storage });

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
req.body.imageLocation = string of location
 */
router.post('/', upload.single('file'), function (req, res) {
  console.log('req.file', req.file);
  var categoryToSave = new Category({ name: req.body.name, file: req.file, created: Date.now(), });
  categoryToSave.save().then(function () {
    console.log('Saved a new category');
    res.sendStatus(201);
  }).catch(function (err) {
    console.log('Error saving category', err);
    res.sendStatus(500);
  });
});

/*
expecting this format
req.body.name = name String
 */
router.put('/:id', function (req, res) {
  Category.update({ _id: req.params.id }, req.body).then(function () {
    console.log('updated a category');
    res.sendStatus(201);
  });
});

/*
a delete request to /:id where :id is the _id of the document
 */
router.delete('/:id', function (req, res) {
  Category.remove({ _id: req.params.id }).then(function () {
    res.sendStatus(204);
  });
});

module.exports = router;
