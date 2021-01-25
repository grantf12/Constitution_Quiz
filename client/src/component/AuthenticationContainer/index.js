import React from "react";
import "./style.css";

const AuthenticationContainer = (props) => {
    return (
        <form id="authentication-container">{props.children}</form>
    )
}

export default AuthenticationContainer;