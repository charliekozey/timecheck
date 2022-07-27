import React from "react";
import { Link } from "react-router-dom";

function Header({ displayName }) {
    return (
        <div className="header">
            <Link to="/">
                <h1 className="header-text">cur8</h1>
            </Link>
            <h2 className="header-text">logged in as: {displayName}</h2>
        </div>
    );
}

export default Header;