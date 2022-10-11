import {NavLink} from "react-router-dom";

export default function Nav() {
    return (
        <nav className="navbar">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About me</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/resume">CV</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
    );
}