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

module.exports = router;
