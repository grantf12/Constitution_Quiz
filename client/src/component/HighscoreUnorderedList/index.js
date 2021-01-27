import React from "react";
import "./style.css";

const UnorderedList = (props) => {
    return(
        <ul className="highscore-unordered-list row">{props.children}</ul>
    )
}

export default UnorderedList;