const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const uri =
  process.env.MONGODB_URI || "mongodb://localhost:27017/constitutionproject";

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(
    () => {
      console.log("Connected to mong");
    },
    (err) => {
      console.log("Error connecting to mong");
      console.log(err);
    }
  );

module.exports = mongoose.connection;
