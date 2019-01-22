const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
// database
mongoose
  .connect(
    "mongodb://delmond:Server2019*@ds163694.mlab.com:63694/delmond", {
      useNewUrlParser: true
    }
  )
  .then(() => {
    console.log("Connected successfully!");
  })
  .catch(() => {
    console.log("Database connection failed");
  });

module.exports = {
  mongoose
};