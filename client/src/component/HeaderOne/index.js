import React from "react";
import "./style.css";

const HeaderOne = (props) => {
    return (
        <h1 className="header-one">{props.children}</h1>
    )
}

export default HeaderOne;