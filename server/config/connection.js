const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/book-search", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
}).catch ((err) => {
  console.error(err);
})
// To debug Mongoose activity, uncomment the following debug line.
// mongoose.set( 'debug', true );

module.exports = mongoose.connection;
