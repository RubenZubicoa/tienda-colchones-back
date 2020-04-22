var express = require('express');
var router = express.Router();


const { getUsers, deleteUser, sigin} = require('../controllers/user');


/* GET users listing. */
router.route('/')
  .get(getUsers)
  .post(sigin)

/* GET one user */
router.route('/:id')
  .delete(deleteUser)

module.exports = router;
