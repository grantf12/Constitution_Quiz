import React from "react";
import "./style.css";

const QuizContainer = (props) => {
    return (
        <div className="quiz-container">{props.children}</div>
    )
}

export default QuizContainer;