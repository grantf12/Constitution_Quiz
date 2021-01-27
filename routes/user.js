const express = require("express");
const { db } = require("../database/models/user");
const router = express.Router()
const User = require("../database/models/user")
const passport = require("../passport")


router.post("/", (req,res) => {
    const {username, password} = req.body

    User.findOne({username: username}, (err,user) =>{
        if (err) {
            console.log("post error in User.js", err)
        } else if (user) {
            res.json({
                error: `Already a user with the username: ${username}`
            })
        }
        else {
            const newUser = new User({
                username: username,
                password: password
            })
            newUser.save((err, savedUser) => {
                if (err) return res.json(err)
                res.json(savedUser)
            })
        }
    })
})

router.post(
    "/login",
    function (req,res,next) {
        console.log(req.body)
        next()
    },
    passport.authenticate("local"),
    (req,res) => {
        var userInfo = {
            username: req.user.username
        };
        res.send(userInfo);
    }
);

router.get("/", (req,res, next) => {
    if (req.user) {
        res.json({user: req.user})
    } else {
        res.json({ user: null})
    }
})

router.post("/logout", (req,res) => {
    if (req.user) {
        req.logout()
        res.send({msg: "logging out"})
    } else {
        res.send({msg: "no user to log out"})
    }
})

router.post("/score", (req,res) => {
    const {score} = req.body
    User.findOneAndUpdate({_id: req.user._id}, { "$push": {score: score}}, (err,user) => {
        if (err) {
            console.log("post error in User.js", err)
            return res.sendStatus(404)
        } 
        res.sendStatus(200);
    })    
})

router.get("/score", (req,res) => {
    console.log("success")
    User.findOne({_id: req.user._id}, (err,user) => {
        console.log(user.score)
        if (err) {
            console.log("post error in User.js", err)
            return res.sendStatus(404)
        } 
        res.json(user.score);

    })    
})

module.exports = router