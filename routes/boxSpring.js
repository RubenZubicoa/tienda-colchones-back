const { Router } = require("express");
const verifyToken = require('../config/veryfyToken');
const { getSpringBoxes, getSomeSpringBoxes, getBoxSpring, createBoxSpring, deleteBoxSpring } = require('../controllers/boxSpring');

const router = Router();

router.route('/')
    .get(getSomeSpringBoxes)

router.route('/private')
    .get(verifyToken, getSpringBoxes)
    .post(verifyToken, createBoxSpring)

router.route('/:id')
    .get(getBoxSpring)
    .delete(verifyToken, deleteBoxSpring)

module.exports = router;