import React from "react";
import "./style.css";

const InnerAuthenticationContainer = (props) => {
    return (
        <div className="inner-authentication-container">{props.children}</div>
    )
}

export default InnerAuthenticationContainer;