import React from "react";
import "./style.css";

const AuthenticationContainer = (props) => {
    return (
        <div id="authentication-container">{props.children}</div>
    )
}

export default AuthenticationContainer;