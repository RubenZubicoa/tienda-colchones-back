/**
 * Create the user model
 */

const { Schema, model } = require("mongoose");
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    email:String,
    password:String,
    admin:Boolean
})

userSchema.pre('save', async function (next){
    const user = this;

    if(!user.isModified('password')) return next();

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    next();
})

module.exports = model('User', userSchema);