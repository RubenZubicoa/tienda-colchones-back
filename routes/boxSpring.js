const { Router } = require("express");
const { getSpringBoxes, getBoxSpring, createBoxSpring, deleteBoxSpring } = require('../controllers/boxSpring');

const router = Router();

router.route('/')
    .get(getSpringBoxes)
    .post(createBoxSpring)

router.route('/:id')
    .get(getBoxSpring)
    .delete(deleteBoxSpring)

module.exports = router;