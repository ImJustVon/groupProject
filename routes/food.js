const router = require('express').Router();
const Food = require('../models/food');
const Search = require('../models/search');
const fs = require('fs');
const parse = require('csv-parse/lib/sync');
const Option = require('../models/option').Option;

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
saves search word in the searches database
 */
router.get('/search/:word', function (req, res) {
  var search = new RegExp('.*' + req.params.word + '.*', 'i');
  console.log('Search: ', search);
  // Search.find({ word: { $regex: search } }).then(function (responseFromDatabase) {
  //   console.log('response: ', responseFromDatabase);
  //   console.log(responseFromDatabase.length);
  //   if (responseFromDatabase.length === 0) {
  //     var searchTerm = new Search({ word: req.params.word, count: 1 });
  //     searchTerm.save();
  //   } else {
  //     console.log(responseFromDatabase[0]);
  //     Search.update({ _id: responseFromDatabase[0]._id }, { $inc: { count: 1 } }).exec();
  //   }
  // });

  //checks the name for a match and the tags array for a matching index then returns the document
  Food.find({ $or: [{ name: { $regex: search } }, { 'tags.$': { $regex: search } }, { 'location.$': { $regex: search } }] }).then(function (dataFromTheDatabase) {
    console.log('Search result ', dataFromTheDatabase);
    res.send(dataFromTheDatabase);
  });
});

/*
Gets all foods with specified category
 */
router.get('/category/:name', function (req, res) {
  Food.find({ category: req.params.name }).then(function (dataFromTheDatabase) {
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

// async issue
router.post('/csv', function (req, res) {
  console.log('req.body: ', req.body);
  var csv = Buffer.from(req.body.base64, 'base64');
  csv = csv.toString();

  var records = parse(csv, { columns: true });
  console.log('records: ', records);
  var arrayOfFoods = [];
  var arrayOfFoodPromises = [];

  function foodComposer(optionsArray, food) {
    var promiseArray = [];
    return new Promise(
      function (resolve, reject) {

      for (var index = 0; index < optionsArray.length; index++) {

        console.log('optionsArray[index]:', optionsArray[index]);
        var query = Option.findOne({ name: optionsArray[index] });

        var promise = query.exec();
        promise.then(function (dataFromTheDatabase) {
            food.options.push(dataFromTheDatabase._doc);
            console.log('dataFromTheDatabase:', dataFromTheDatabase._doc);
            console.log('food:', food);
          });

        promiseArray.push(promise);
      }

      Promise.all(promiseArray).then(function () {
        if (food.score >= 81) {
          food.grade = 'A';
        } else if (food.score >= 61 && food.score < 81) {
          food.grade = 'B';
        } else if (food.score >= 41 && food.score < 61) {
          food.grade = 'C';
        } else if (food.score >= 26 && food.score < 41) {
          food.grade = 'D';
        } else if (food.score < 26) {
          food.grade = 'F';
        }

        resolve(food);
      });

    });
  }

  for (var countOfFoods = 0; countOfFoods < records.length; countOfFoods++) {
    var optionsArray =  records[countOfFoods].options.split(', ');
    console.log('optionsArray', optionsArray);
    records[countOfFoods].options = [];
    var food = records[countOfFoods];
    console.log('food before loop', food);
    arrayOfFoodPromises.push(foodComposer(optionsArray, food));

  }

  Promise.all(arrayOfFoodPromises).then(function () {
      arrayOfFoodPromises.forEach(function (promise) {
        promise.then(function (food) {
          var foodToSave = new Food(food);
          foodToSave.save(foodToSave);
          arrayOfFoods.push(food);
        });
      });

      res.sendStatus(201);
      console.log('foodArray:', arrayOfFoods);
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
  console.log('Food to save, ', req.body);
  foodToSave.save().then(function () {
    console.log('Saved a new food');
    res.sendStatus(201);
  }).catch(function (err) {
    console.log('Error saving food', err);
    res.sendStatus(500);
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
