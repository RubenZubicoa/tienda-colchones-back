/**
 * Create the user model
 */

const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    email:String,
    password:String,
    admin:Boolean
})
module.exports = model('User', userSchema);