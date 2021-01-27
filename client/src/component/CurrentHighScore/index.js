import React from "react";
import "./style.css";

const CurrentHighScore = (props) => {
    return (
        <ul className="current-high-score">{props.children}</ul>
    )
}

export default CurrentHighScore;