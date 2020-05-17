import React, { Fragment } from 'react';
import './nav-bar.scss';
import {
    Link
  } from "react-router-dom";
import { useHistory } from 'react-router-dom';

function NavBar(){
   const history = useHistory()

    return (
        <Fragment>
            <nav className="container">
                <h1 onClick={() => {history.push("/")}}>Rubén Triviño Juárez</h1>
                <ul>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    {/* <li><Link to="/about">About</Link></li> */}
                </ul>
            </nav>
        </Fragment>
    );
} 
export default NavBar;
