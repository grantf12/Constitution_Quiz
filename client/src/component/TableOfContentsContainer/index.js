import React from "react";
import "./style.css";

const TableOfContentsContainer = (props) => {
    return (
        <div className="table-of-contents-container">{props.children}</div>
    )
}

export default TableOfContentsContainer;