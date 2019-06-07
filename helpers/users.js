//Assign database for helper functions
const db = require("../models");

//GET route to list all 
exports.getusers = function(req, res) {
  db.Userapi.find()
    .then(function(users) {
      res.json(users);
    })
    .catch(function(err) {
      res.send(err);
    });
}

//POST rout to create
exports.postusers = function(req, res) {
  db.Userapi.create(req.body)
    .then(function(newUser) {
      res.status(201).json(newUser);
    })
    .catch(function(err) {
      res.send(err);
    });
};


//GET specific id
exports.getid = function(req, res) {
  db.Userapi.findById(req.params.userId)
    .then(function(foundId) {
      res.json(foundId);
    })
    .catch(function(err) {
      res.send(err);
    });
};


//PUT route to update
exports.putid = function(req, res) {
  db.Userapi.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true })
    .then(function(User) {
      res.json(User);
    })
    .catch(function(err) {
      res.send(err);
    });
};



//DELETE route for specific id
exports.deleteid = function(req, res) {
  db.Userapi.deleteOne({ _id: req.params.userId })
    .then(function(User) {
      res.json("Deleted!");
    })
    .catch(function(err) {
      res.send(err);
    });
};





//exports to be accessed
module.exports = exports;
