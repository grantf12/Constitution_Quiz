import React from "react";
import "./style.css";

const InterestingFactHeader = (props) => {
    return (
        <h4 className="interesting-fact-header">{props.children}</h4>
    )
}

export default InterestingFactHeader;