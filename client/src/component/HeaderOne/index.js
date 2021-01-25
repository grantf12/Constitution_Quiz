import React from "react";
import "./style.css";

const HeaderOne = (props) => {
    return (
        <h3 className="header-one">{props.children}</h3>
    )
}

export default HeaderOne;