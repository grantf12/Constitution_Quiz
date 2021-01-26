import React from "react";
import "./style.css";

const TableOfContentsLink = (props) => {
    return (
        <p className="table-of-contents-link">{props.children}</p>
    )
}

export default TableOfContentsLink;