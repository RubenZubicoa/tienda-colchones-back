const mattressCtrl = {}

const Mattress = require('../models/Mattress');

mattressCtrl.getMattresses = async (req, res) => {
    const mattresses = await Mattress.find();
    res.json(mattresses)
}

mattressCtrl.getMattress = async (req, res) => {
    const mattress = await Mattress.findById(req.params.id);
    res.json(mattress)
}

mattressCtrl.createMattress = async (req, res) => {
    await Mattress.create(req.body);
    res.json({Message:'Colchon creado correctamente'})
}

mattressCtrl.deleteMattress = async (req, res) => {
    await Mattress.findOneAndDelete({_id: req.params.id});
    res.json({Message:'Colchon eliminado correctamente'})
}

module.exports = mattressCtrl;