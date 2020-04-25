const { Router } = require("express");
const verifyToken = require("../config/veryfyToken");
const {
  getMattresses,
  getSomeMattresses,
  getMattress,
  createMattress,
  deleteMattress,
  updateMattress,
  getCountMattresses
} = require("../controllers/mattress");

const router = Router();

router.route("/").get(getSomeMattresses);

router.route('/count')
  .get(getCountMattresses)

router.route("/private").post(verifyToken, createMattress);

router.route("/private/:page").get(verifyToken, getMattresses);

router
  .route("/private/:id")
  .get(verifyToken, getMattress)
  .put(verifyToken, updateMattress)
  .delete(verifyToken, deleteMattress);

module.exports = router;
