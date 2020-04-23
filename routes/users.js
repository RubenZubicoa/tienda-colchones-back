var express = require("express");
var router = express.Router();

const { getUsers, deleteUser, signin } = require("../controllers/user");

/* GET users listing. */
router
  .route("/")
  .get(getUsers);

/* POST signin */
router.post("/signin", signin);

module.exports = router;
