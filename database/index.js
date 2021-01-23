const mongoose = require("mongoose")
mongoose.Promise = global.Promise


const uri = "mongodb://localhost:27017/constitutionproject"

mongoose.connect(uri).then(
    () => {
        console.log("Connected to mong")
    }, err => {
        console.log("Error connecting to mong")
        console.log(err)
    }
);


module.exports = mongoose.connection