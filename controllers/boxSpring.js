const boxSpringCtrl = {};

const BoxSpring = require("../models/BoxSpring");

boxSpringCtrl.getSpringBoxes = async (req, res) => {
  try {
    const data = await BoxSpring.find();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).send(err);
  }
};

boxSpringCtrl.getBoxSpring = async (req, res) => {
  try {
    const data = await BoxSpring.findById(req.params.id);
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).send(err);
  }
};

boxSpringCtrl.createBoxSpring = async (req, res) => {
  try {
    await BoxSpring.create(req.body);
    return res
      .status(200)
      .json({ Message: "Somier introducido correctamente" });
  } catch (err) {
    return res.status(500).send(err);
  }
};

boxSpringCtrl.deleteBoxSpring = async (req, res) => {
  try{
    await BoxSpring.findByIdAndDelete(req.params.id);
    return res.status(200).json({ Message: "Somier eliminado correctamente" });
  }catch(err){
      return res.status(500).send(err)
  }
};

module.exports = boxSpringCtrl;
