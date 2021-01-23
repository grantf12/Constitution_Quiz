import React from "react";
import "./style.css";

const HeaderTwo = (props) => {
    return(
        <h2 className="header-two">{props.children}</h2>
    )
}

export default HeaderTwo;