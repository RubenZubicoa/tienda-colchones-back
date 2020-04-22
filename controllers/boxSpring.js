const boxSpringCtrl = {};

const BoxSpring = require('../models/BoxSpring')

boxSpringCtrl.getSpringBoxes = async (req, res) => {
    const data = await BoxSpring.find();
    res.status(200).json(data)
}

boxSpringCtrl.getBoxSpring = async (req, res) => {
    const data = await BoxSpring.findById(req.params.id);
    res.status(200).json(data)
}

boxSpringCtrl.createBoxSpring = async (req, res) => {
    await BoxSpring.create(req.body);
    res.status(200).json({Message:'Somier introducido correctamente'})
}

boxSpringCtrl.deleteBoxSpring = async (req, res) =>{
    await BoxSpring.findByIdAndDelete(req.params.id);
    res.status(200).json({Message:'Somier eliminado correctamente'})
}

module.exports = boxSpringCtrl;