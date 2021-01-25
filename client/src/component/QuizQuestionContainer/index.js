import React from "react";
import "./style.css";

const QuizQuestionContainer = (props) => {
    return (
        <div id="quiz-question-container">{props.children}</div>
    )
}

export default QuizQuestionContainer;