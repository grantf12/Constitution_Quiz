import React from "react";
import "./style.css";

const Paragraph = (props) => {
    return (
        <p className="paragraph">{props.children}</p>
    )
}

export default Paragraph;