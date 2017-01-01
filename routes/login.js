const router = require('express').Router();
const passport = require('passport');

router.post('/', passport.authenticate('local'), function (req, res) {
  console.log('from login route: ', req.body);
  res.sendStatus(200);
});

module.exports = router;
