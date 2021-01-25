const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
mongoose.promise = Promise;

const scoreForm = ({ score, scoresSaved }) => {

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

export default scoreForm;