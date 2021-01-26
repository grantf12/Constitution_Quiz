import React from "react";
import "./style.css";

const AuthenticationParagraph = (props) => {
    return (
        <p className="authentication-paragraph">{props.children}</p>
    )
}

export default AuthenticationParagraph;