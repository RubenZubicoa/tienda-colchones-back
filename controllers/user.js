const userCtrl = {};

const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

userCtrl.getUsers = async (req, res) => {
    const users = await User.find();
    return res.json(users);
}

userCtrl.getUser = async (req, res) => {
    const user = await User.findOne({email:req.params.email});
    return res.json(user);
}

userCtrl.sigin = async (req, res) => {
   const {email, password}  = req.body;
   const user = await User.findOne({email})

   if(!user) return res.status(401).send("The email doesn't exists");
   if(!await bcrypt.compare(req.body.password, user.password)) return res.status(401).send('Wrong Password');

   const token = jwt.sign({_id:user._id}, 'secretKey');
   console.log()
   return res.status(200).json({token})
}

userCtrl.deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    return res.status(200).json({Message:'Usuario eliminado'})
}

module.exports = userCtrl;