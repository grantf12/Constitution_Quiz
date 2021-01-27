import React from "react";
import "./style.css";

const QuizResultsContainer = (props) => {
    return (
        <div className="quiz-results-container">{props.children}</div>
    )
}

export default QuizResultsContainer;