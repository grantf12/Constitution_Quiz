import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
    return (
        <div id="navbar">
            <ul id="navbar-link-list">
                <li className="navbar-link">
                    <Link className="link" to="/home">Home</Link>
                </li>
                <li className="navbar-link">
                    <Link className="link" to="/constitution">Constitution</Link>
                </li>
                <li className="navbar-link">
                    <Link className="link" to="/quiz">Quiz</Link>
                </li>
                <li id="navbar-link-logout">
                    <Link className="link" to="/">Logout</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;