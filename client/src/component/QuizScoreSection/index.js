import React from "react";
import "./style.css";

const QuizScoreSection = (props) => {
    return (
        <div id="quiz-score-section">{props.children}</div>
    )
}

export default QuizScoreSection;