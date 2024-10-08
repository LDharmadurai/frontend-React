import React from "react";
import { Link } from "react-router-dom";

const NavBar : React.FC = () => {
    return(
        <>
            <nav>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/new"}>New Item</Link></li>
                </ul>
            </nav>
        </>
    );
};

export default NavBar;