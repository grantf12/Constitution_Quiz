import React from "react";
import "./style.css";

const InterestingFactContainer = (props) => {
    return (
        <div id="interesting-fact-container">{props.children}</div>
    )
}

export default InterestingFactContainer;