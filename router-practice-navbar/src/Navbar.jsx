import React from "react";
// import {Link} from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
        <nav className="active_class">
            <NavLink to="/">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="*">Error</NavLink>

        </nav>

            {/* <Link to="/">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="*">Error</Link> */}
        </>
    )

}

export default Navbar;