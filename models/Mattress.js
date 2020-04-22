/**
 * Create the mattress model
 */
const { Schema, model } = require("mongoose");
const productSchema = require('./Product');

const mattressSchema = productSchema();

module.exports = model('Mattress',mattressSchema);
