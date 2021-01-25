import React from "react";
import "./style.css";

const QuizQuestionText = (props) => {
    return (
        <h3 className="quiz-question-text">{props.children}</h3>
    )
}

export default QuizQuestionText;