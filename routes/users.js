//Assign values for requires
const express = require("express");
const router = express.Router();
const helpers = require('../helpers/users');


//Route for / path
router.route('/')
    .get(helpers.getusers)
    .post(helpers.postusers)

//Route for /userId path
router.route('/:userId')
    .get(helpers.getid)
    .put(helpers.putid)
    .delete(helpers.deleteid)

module.exports = router;
