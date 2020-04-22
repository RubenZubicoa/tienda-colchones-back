/**
 * Create the mattress model
 */
const { Schema, model } = require("mongoose");

const mattressSchema = new Schema({
  title: String,
  image: String,
  description: String,
  price: Number,
});

module.exports = model('Mattress',mattressSchema);
