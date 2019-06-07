//Assign mongoose
const mongoose = require("mongoose");

mongoose.set('debug', true);
mongoose.connect(
  "mongodb://....../projecttimetable",
  {
    useNewUrlParser: true
  }
);

mongoose.Promise = Promise;


//Call todo file to assign
module.exports.Userapi = require('./user');
