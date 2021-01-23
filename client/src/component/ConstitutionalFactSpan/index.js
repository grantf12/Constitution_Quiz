import React from "react";
import "./style.css";

const ConstitutionalFactSpan = (props) => {
    return (
        <span className="constitutional-fact-span">{props.children}</span>
    )
}

export default ConstitutionalFactSpan;