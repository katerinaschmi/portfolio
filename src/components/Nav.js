import {NavLink} from "react-router-dom";

export default function Nav() {
    return (
        <nav className="navbar" id='navbar'>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/error">About me</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/error">CV</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
    );
}