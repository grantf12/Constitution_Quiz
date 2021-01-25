const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
mongoose.promise = Promise;

export default funtion scoreForm({ score, scoresSaved }) {

    const saveScores = (e) => {
        e.preventDefault();
        const scoreList ={
            name: username, score
        };
    };

    mongoose.scores().push(scoreList, () => {
        scoresSaved();
    });

};