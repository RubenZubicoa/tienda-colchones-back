const { Router } = require("express");
const verifyToken = require("../config/veryfyToken");
const {
  getSpringBoxes,
  getSomeSpringBoxes,
  getBoxSpring,
  createBoxSpring,
  deleteBoxSpring,
  updateBoxSpring,
  getCountSpringBoxes
} = require("../controllers/boxSpring");

const router = Router();

router.route("/").get(getSomeSpringBoxes);

router.route('/count')
  .get(getCountSpringBoxes)

router.route("/private").post(verifyToken, createBoxSpring);

router.route("/private/:page").get(verifyToken, getSpringBoxes);

router.route("/private/:id")
  .get(verifyToken, getBoxSpring)
  .delete(verifyToken, deleteBoxSpring)
  .put(verifyToken, updateBoxSpring);

module.exports = router;
