import React from "react";
import "./style.css";

const CurrentHighScore = (props) => {
    return (
        <p className="current-high-score">{props.children}</p>
    )
}

export default CurrentHighScore;