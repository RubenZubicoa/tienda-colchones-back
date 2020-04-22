const mattressCtrl = {};

const Mattress = require("../models/Mattress");

mattressCtrl.getMattresses = async (req, res) => {
  try {
    const mattresses = await Mattress.find();
    return res.status(200).json(mattresses);
  } catch (err) {
    return res.status(500).send(err);
  }
};

mattressCtrl.getMattress = async (req, res) => {
  try {
    const mattress = await Mattress.findById(req.params.id);
    return res.status(200).json(mattress);
  } catch (err) {
    return res.status(500).send(err);
  }
};

mattressCtrl.createMattress = async (req, res) => {
  try {
    await Mattress.create(req.body);
    return res.status(200).json({ Message: "Colchon creado correctamente" });
  } catch (err) {
    return res.status(500).send(err);
  }
};

mattressCtrl.deleteMattress = async (req, res) => {
  try {
    await Mattress.findOneAndDelete({ _id: req.params.id });
    return res.status(200).json({ Message: "Colchon eliminado correctamente" });
  } catch (err) {
    return res.status(500).send(err);
  }
};

module.exports = mattressCtrl;
