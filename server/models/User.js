const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userName: String,
  password: String,
  name: String,
  lastName: String,
  address: String,
  cellNum: String,
  mailAddress: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
