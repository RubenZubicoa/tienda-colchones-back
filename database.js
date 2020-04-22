const mongoose = require("mongoose");

/**
 * Connect to database
 */

mongoose.connect("mongodb://localhost/tienda-colchones", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(db => console.log('DB is connected'))
.catch(err => console.log(err))
