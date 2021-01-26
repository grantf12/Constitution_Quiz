const mongoose = require("mongoose")
const Schema = mongoose.Schema
const bcrypt = require("bcryptjs")
mongoose.promise = Promise;

const userSchema = new Schema({
    username: {type: String, unique: true, required: true},
    password: { type: String, unique: false, required: true},
    score: { type: Array, unique: false, required: false, default: 0}
})


userSchema.methods = {
    checkPassword: function (inputPassword) {
        return bcrypt.compareSync(inputPassword, this.password)
    },
    hashPassword: plainTextPassword => {
        return bcrypt.hashSync(plainTextPassword, 10)
    }
}

userSchema.pre("save", function (next) {
    if (!this.password){
        next()
    } else {
        this.password = this.hashPassword(this.password)
        next()
    }
})

const User = mongoose.model("User", userSchema)

module.exports = User