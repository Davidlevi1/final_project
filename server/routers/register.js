const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/', async (req, res) => {
  try {
    const { userName, password, name, lastName, address, cellNum, mailAddress } = req.body;
    const user = new User({ userName, password, name, lastName, address, cellNum, mailAddress });
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
