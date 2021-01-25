import React from "react";
import "./style.css";

const QuizHighScoresContainer = (props) => {
    return (
        <div id="quiz-high-scores-container">{props.children}</div>
    )
}

export default QuizHighScoresContainer;