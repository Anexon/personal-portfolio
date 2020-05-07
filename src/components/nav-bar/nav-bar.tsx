import React, { Fragment } from 'react';
import './nav-bar.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { useHistory } from 'react-router-dom';

function NavBar(){
   const history = useHistory()

    return (
        <Fragment>
            <nav className="container">
                <h1 onClick={() => {history.push("/")}}>Rubén Triviño Juárez</h1>
                <button id="navbar-button">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
            <ul className="responsive-nav">
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </Fragment>
    );
}
export default NavBar;
