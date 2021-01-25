import React from "react";
import "./style.css";

const AmendmentContainer = (props) => {
    return (
        <div className="amendment-container">{props.children}</div>
    )
}

export default AmendmentContainer;