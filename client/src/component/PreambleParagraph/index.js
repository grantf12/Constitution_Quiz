import React from "react";
import "./style.css";

const PreambleParagraph = (props) => {
    return (
        <p className="preamble-paragraph">{props.children}</p>
    )
}

export default PreambleParagraph;