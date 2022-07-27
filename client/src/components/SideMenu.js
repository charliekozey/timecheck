import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

function SideMenu() {
    return (
        <div className="side-menu">
            {/* <div>Log in as user</div>
            <div>Log in as designer</div> */}
            {/* <Link to="/signup-designer">
                <div>sign up as designer</div>
            </Link> */}
            <Link to="/global"><div>Global pieces</div></Link>
            <Link to="/curated"><div>Curated for you</div></Link>
            <Link to="/my-pieces"><div>Your selections</div></Link>
        </div>
    );
}

export default SideMenu;