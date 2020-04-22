var express = require("express");
var router = express.Router();

const { getUsers, deleteUser, sigin } = require("../controllers/user");

router
  .route("/")
  /* GET users listing. */
  .get(getUsers)
  /* POST sigin */
  .post(sigin);

module.exports = router;
