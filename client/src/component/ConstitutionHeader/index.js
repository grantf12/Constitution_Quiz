import React from "react";
import "./style.css";

const ConstitutionHeader = (props) => {
    return (
        <p id="constitution-header">{props.children}</p>
    )
}

export default ConstitutionHeader;