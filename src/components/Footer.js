import instagram from '../img/instagram.png';
import facebook from '../img/facebook.png';
import linkedin from '../img/linkedin.png';
import github from '../img/github.png';
import {NavLink} from "react-router-dom";

export default function Footer() {
    return (
        <div className='footersec'>
            <nav className="footernav">
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/about">About me</NavLink>
                <NavLink to="/portfolio">Portfolio</NavLink>
                <NavLink to="/resume">CV</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
            <div>
                <a href='https://www.instagram.com/karunokami/'><img src={instagram} alt='instagram' className='footericon'></img></a>
                <a href='https://www.facebook.com/kacka.schmidtova.1'><img src={facebook} alt='facebook' className='footericon'></img></a>
                <a href='https://www.linkedin.com/in/kate%C5%99ina-schmidtov%C3%A1-430279220/'><img src={linkedin} alt='linkedin' className='footericon'></img></a>
                <a href='https://github.com/katerinaschmi'><img src={github} alt='github' className='footericon'></img></a>
            </div>
            <h1 className='copyright'>Copyright 2022</h1>
        </div>
    )
}