const { Router } = require('express');
const verifyToken = require('../config/veryfyToken');
const { getMattresses, getMattress, createMattress, deleteMattress } = require('../controllers/mattress');

const router = Router();

router.route('/')
    .get(verifyToken, getMattresses)
    .post(createMattress)

router.route('/:id', verifyToken)
    .get(getMattress)
    .delete(deleteMattress)

module.exports = router;
