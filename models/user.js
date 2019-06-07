const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "name is required"
  },
  email: {
    type: String,
    required: "name is required"
  },
  password: {
    type: String,
    required: "name is required"
  },
  remember: {
    type: Boolean,
    default:false
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

const Userapi = mongoose.model('userapi', userSchema);
module.exports = Userapi;
