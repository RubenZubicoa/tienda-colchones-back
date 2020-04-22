const { Schema, model } = require("mongoose");


function productSchema () {
    const schema = new Schema({
        title: String,
        image: String,
        description: String,
        price: Number,
      });
  
    return schema;
  }

module.exports = productSchema;