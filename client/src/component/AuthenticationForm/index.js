import React from "react";
import "./style.css";

const AuthenticationForm = (props) => {
    return (
        <div className="authentication-form">{props.children}</div>
    )
}

export default AuthenticationForm;