import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';


    const Navbar = () => {

    return (
    <>
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
    <div className="container-fluid">
    <div className="navbar-header">
    <NavLink to="/" className="navbar-brand">
    Yodlr Frontend Challenge
    </NavLink>
    </div>    
        <ul className="navbar-nav navbar-right"> 
        <li className="nav-item">
        <NavLink className="nav-link" to="/admin">Admin </NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/signup">Register Here</NavLink>
        </li>
        </ul>        
        </div>
        </nav>
    </>
    )
}

export default Navbar;