//Assign mongoose
const mongoose = require("mongoose");

mongoose.set('debug', true);
mongoose.connect(
  "mongodb://noteuser:noteuser1998@ds125693.mlab.com:25693/projecttimetable",
  {
    useNewUrlParser: true
  }
);

mongoose.Promise = Promise;


//Call todo file to assign
module.exports.Userapi = require('./user');
