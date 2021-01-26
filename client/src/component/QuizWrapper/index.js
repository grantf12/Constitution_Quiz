import React from "react";
import "./style.css";

const QuizWrapper = (props) => {
    return (
        <div className="quiz-wrapper">{props.children}</div>
    )
}

export default QuizWrapper;