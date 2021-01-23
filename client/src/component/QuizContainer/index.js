import React from "react";
import "./style.css";

const QuizContainer = (props) => {
    return (
        <div className="container">{props.children}</div>
    )
}

export default QuizContainer;