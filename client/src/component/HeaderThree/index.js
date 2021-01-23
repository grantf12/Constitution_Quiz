import React from "react";
import "./style.css";

const ConstitutionSectionHeader = (props) => {
    return (
        <h3 className="constitution-section-header">{props.children}</h3>
    )
}

export default ConstitutionSectionHeader;