/**
 * Create the mattress model
 */
const { Schema, model } = require("mongoose");

const mattressSchema = new Schema({
    title:String,
    image:String,
    description:string,
    price:String
});

module.exports = model(mattressSchema)
