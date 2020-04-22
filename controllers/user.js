const userCtrl = {};

const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

userCtrl.getUsers = async (req, res) => {
  const users = await User.find();
  return res.json(users);
};

userCtrl.sigin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) return res.status(401).send("The email doesn't exists");
  if (!(await bcrypt.compare(password, user.password)))
    return res.status(401).send("Wrong Password");

  try {
    const token = jwt.sign({ _id: user._id }, "secretKey");
    return res.status(200).json({ token });
  } catch (err) {
    return res.status(500).send(err);
  }
};

module.exports = userCtrl;
