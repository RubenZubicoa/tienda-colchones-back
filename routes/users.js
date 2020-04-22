var express = require('express');
var router = express.Router();

const { getUsers, getUser} = require('../controllers/user');

/* GET users listing. */
router.route('/')
  .get(getUsers)

/* GET one user */
router.route('/:email')
  .get(getUser)  

module.exports = router;
