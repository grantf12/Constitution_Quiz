import React from "react";
import "./style.css";

const ModalHeader = (props) => {
    return (
        <h1 className="modal-header">{props.children}</h1>
    )
}

export default ModalHeader;