import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <Link to="/">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="*">Error</Link>
        </>
    )

}

export default Navbar;