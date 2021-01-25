import React from "react";
import "./style.css";

const ArticleContainer = (props) => {
    return (
        <div className="article-container">{props.children}</div>
    )
}

export default ArticleContainer;