const express = require('express');
const User = require('../models/User'); 
const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send('Email already registered!');
    }

    const user = new User({ email, password });
    await user.save();
    res.status(201).send('User registered successfully!');
  } catch (error) {
    res.status(400).send(`Error: ${error.message}`);
  }
});

module.exports = router;
