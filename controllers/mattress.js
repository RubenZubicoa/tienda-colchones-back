const mattressCtrl = {};

const Mattress = require("../models/Mattress");

mattressCtrl.getMattresses = async (req, res) => {
  try {
    var mattresses = await Mattress.find();
    var page = req.params.page;
    mattresses = mattresses.slice((page * 10)  - 10, (page * 10))
    console.log(mattresses)
    return res.status(200).json(mattresses);
  } catch (err) {
    return res.status(500).send(err);
  }
};

mattressCtrl.getSomeMattresses = async (req, res) => {
  try {
    const mattresses = await Mattress.find();
    return res.status(200).json(mattresses.slice(1, 6));
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

mattressCtrl.updateMattress = async (req, res) => {
  try {
    await Mattress.findByIdAndUpdate(req.params.id, req.body);
    return res
      .status(200)
      .json({ Message: "Colchon modificado correctamente" });
  } catch (err) {
    return res.status(500).send(err);
  }
};

mattressCtrl.getCountMattresses = async (req, res) => {
  try{
    const data = await Mattress.count();
    return res.status(200).json(data)
  }catch (err) {
    return res.status(500).send(err);
  }
}

module.exports = mattressCtrl;
