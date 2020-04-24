var express = require("express");
var router = express.Router();

const { getUsers, getUser, signin } = require("../controllers/user");

/* GET users listing. */
router
  .route("/")
  .get(getUsers);

/* POST signin */
router.post("/signin", signin);

/** GET one user */
router.get('/:id', getUser);

module.exports = router;
