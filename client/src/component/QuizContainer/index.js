import React from "react";
import "./style.css";

const QuizContainer = (props) => {
    return (
        <div id="-quiz-container">{props.children}</div>
    )
}

export default QuizContainer;