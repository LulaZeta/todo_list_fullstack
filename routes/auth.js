const express = require('express');
const router = express.Router();
const User = require('../models/User');

// @route GET /api/auth/test
// @desc  Test the auth route
// @access Public
router.get('/test', (req, res) => {
  res.send('auth routh working');
});

// @route POST /api/auth/register
// @desc  Create a new user
// @access Public
router.get('/register', async (req, res) => {
  try {
    //  create a new user

    const newUser = new User({
      email: req.body.email,
      //password: req.body.password,
      name: req.body.name,
    });

    //save the User to de database
    const savedUser = await newUser.save();

    //return the new user
    return res.json(savedUser);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
});

module.exports = router;
