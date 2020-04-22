/**
 * Create the box spring model
 */
const { Schema, model } = require("mongoose");
const productSchema = require('./Product');

const boxSpringSchema = productSchema();

module.exports = model('BoxSpring', boxSpringSchema);