import React from "react";
import "./style.css";

const QuizQuestionSection = (props) => {
    return (
        <div id="quiz-question-section">{props.children}</div>
    )
}

export default QuizQuestionSection;