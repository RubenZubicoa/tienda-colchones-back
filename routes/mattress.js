const { Router } = require('express');
const { getMattresses, getMattress, createMattress, deleteMattress } = require('../controllers/mattress');

const router = Router();

router.route('/')
    .get(getMattresses)
    .post(createMattress)

router.route('/:id')
    .get(getMattress)
    .delete(deleteMattress)

module.exports = router;
