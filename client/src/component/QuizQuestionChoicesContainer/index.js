import React from "react";
import "./style.css";

const QuizQuestionChoicesContainer = (props) => {
    return (
        <div id="quiz-question-choices-container">{props.children}</div>
    )
}

export default QuizQuestionChoicesContainer;