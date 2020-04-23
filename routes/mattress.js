const { Router } = require('express');
const verifyToken = require('../config/veryfyToken');
const { getMattresses, getSomeMattresses, getMattress, createMattress, deleteMattress } = require('../controllers/mattress');

const router = Router();

router.route('/')
    .get(getSomeMattresses)

router.route('/private')
    .get(verifyToken, getMattresses)
    .post(verifyToken, createMattress)

router.route('/:id')
    .get(getMattress)
    .delete(verifyToken, deleteMattress)

module.exports = router;
