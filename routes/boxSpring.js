const { Router } = require("express");
const verifyToken = require('../config/veryfyToken');
const { getSpringBoxes, getSomeSpringBoxes, getBoxSpring, createBoxSpring, deleteBoxSpring, updateBoxSpring } = require('../controllers/boxSpring');

const router = Router();

router.route('/')
    .get(getSomeSpringBoxes)

router.route('/private')
    .get(verifyToken, getSpringBoxes)
    .post(verifyToken, createBoxSpring)

router.route('/private/:id')
    .get(verifyToken, getBoxSpring)
    .delete(verifyToken, deleteBoxSpring)
    .put(verifyToken, updateBoxSpring)

module.exports = router;