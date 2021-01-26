import React from "react";
import "./style.css";

const ALink = (props) => {
    return (
        <a className="a-link">{props.children}</a>
    )
}

export default ALink;