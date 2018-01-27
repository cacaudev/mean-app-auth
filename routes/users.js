const express  = require('express');
const passport = require('passport');
const jwt      = require('jsonwebtoken');
const User     = require('../models/user');
const router   = express.Router();

router.post('/register', (req, res, next) => {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });

  User.addUser(newUser, (err, user) => {
    if(err) {
      res.json({sucess: false, msg: 'Failed to register user.'});
    } else {
      res.json({sucess: true, msg: 'User registered.'});
    }
  });

});

router.post('/authenticate', (req, res, next) => {
  res.send('AUTHENTICATE');
});

router.get('/profile', (req, res, next) => {
  res.send('PROFILE');
});

module.exports = router;

