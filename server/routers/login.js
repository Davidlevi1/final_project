const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/', async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName, password }).exec();
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.status(200).send('SUCCESS');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
