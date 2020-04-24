const { Router } = require('express');
const verifyToken = require('../config/veryfyToken');
const { getMattresses, getSomeMattresses, getMattress, createMattress, deleteMattress, updateMattress } = require('../controllers/mattress');

const router = Router();

router.route('/')
    .get(getSomeMattresses)

router.route('/private')
    .get(verifyToken, getMattresses)
    .post(verifyToken, createMattress)

router.route('/private/:id')
    .get(verifyToken, getMattress)
    .put(verifyToken, updateMattress)
    .delete(verifyToken, deleteMattress)

module.exports = router;
