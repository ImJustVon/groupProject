const router = require('express').Router();
const Search = require('../models/search');

//gets all search documnets
router.get('/', function (req, res) {
  Search.find({}).then(function (responseFromDatabase) {
    res.send(responseFromDatabase);
  });
});

//deletes document where _id = /:id
router.delete('/:id', function (req, res) {
  Search.remove({ _id: req.params.id }).then(function () {
    res.sendStatus(204);
  });
});

module.exports = router;
