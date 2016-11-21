const router = require('express').Router();
const Food = require('../models/food');

/*
Gets all documents with the specified location /food/location/(the location)
Searches through location array of all documents
Returns the document with matches
 */
router.get('/location/:location', function (req, res) {
  Food.find({ location: req.params.location }).then(function (dataFromTheDatabase) {
    console.log('Location result ', dataFromTheDatabase);
    res.send(dataFromTheDatabase);
  });
});

/*
Search request is sent to /food/search/(the phrase they are searching for)
Searches for the phrase in the name and the tags to match
Returns the document with matches
 */
router.get('/search/:word', function (req, res) {
  //checks the name for a match and the tags array for a matching index then returns the document
  Food.find({ $or: [{ name: req.params.word }, { tags: word }] }).then(function (dataFromTheDatabase) {
    console.log('Search result ', dataFromTheDatabase);
    res.send(dataFromTheDatabase);
  });
});

/*
Gets all foods with specified category
 */
router.get('/category/:name', function (req, res) {
  Food.find({ category: name }).then(function (dataFromTheDatabase) {
    console.log('Documents from mongo ', dataFromTheDatabase);
    res.send(dataFromTheDatabase);
  });
});

/*
Gets the whole food database
 */
router.get('/', function (req, res) {
  Food.find({}).then(function (dataFromTheDatabase) {
    console.log('Documents from mongo ', dataFromTheDatabase);
    res.send(dataFromTheDatabase);
  });
});

/*
adds a new food to the database
expected form
req.body.name = String with the product name
req.body.category = string name of the category
req.body.options = array of option objects
req.body.score = number score
req.body.overRide = boolean if they have an overRide
req.body.overRideValue = letter grade of the overRide
req.body.tags = array of tags the are added to the food (other searchable terms)
 */
router.post('/', function (req, res) {
  var foodToSave = new Food(req.body);
  foodToSave.save().then(function () {
    console.log('Saved a new food');
    res.sendStatus(201);
  });
});

/*
updates a food with _id of /:id
expected form
req.body.name = String with the product name
req.body.category = string name of the category
req.body.options = array of option objects
req.body.score = number score
req.body.overRide = boolean if they have an overRide
req.body.overRideValue = letter grade of the overRide
req.body.tags = array of tags the are added to the food (other searchable terms)
 */
router.put('/:id', function (req, res) {
  //matches _id with id then updates all the values
  Food.update({ _id: req.params.id }, req.body).then(function () {
    console.log('Updated a food');
    res.sendStatus(201);
  });
});

/*
a delete request to /:id where :id is the _id of the document
 */
router.delete('/:id', function (req, res) {
  console.log('trying to remove: ', req.params.id);
  Food.remove({ _id: req.params.id }).then(function () {
    res.sendStatus(204);
  });
});

module.exports = router;
