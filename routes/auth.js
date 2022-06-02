const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const validateRegisterInput = require('../validation/registerValidation');

// @route GET /api/auth/test
// @desc  Test the auth route
// @access Public
router.get('/test', (req, res) => {
  res.send('auth routh working');
});

// @route POST /api/auth/register
// @desc  Create a new user
// @access Public
router.post('/register', async (req, res) => {
  try {
    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }
    // check for ixisting user
    const existingEmail = await User.findOne({
      email: new RegExp('^' + req.body.email + '$', 'i'),
    });

    if (existingEmail) {
      return res
        .status(400)
        .json({ error: 'There is already a user with this email' });
    }
    //hash the password
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    //  create a new user

    const newUser = new User({
      email: req.body.email,
      password: hashedPassword,
      name: req.body.name,
    });

    //save the User to de database
    const savedUser = await newUser.save();

    // no retornamos la password..tenemos q crear un nuevo objeto y luego le quitamos la pass
    const userToReturn = { ...savedUser._doc };
    delete userToReturn.password;

    //return the new user
    return res.json(userToReturn);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
});

// @route POST /api/auth/loggin
// @desc  Login user and return a access token
// @access Public
router.post('/login', async (req, res) => {
  try {
    // check for the user
    const user = await User.findOne({
      email: new RegExp('^' + req.body.email + '$', 'i'),
    });

    if (!user) {
      return res
        .status(400)
        .json({ error: 'There was a ploblem with your login credentials' });
    }
    const passwordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!passwordMatch) {
      return res
        .status(400)
        .json({ error: 'There was a ploblem with your login credentials' });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send(err.message);
  }
});

module.exports = router;
