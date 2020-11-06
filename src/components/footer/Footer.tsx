import React from "react";
import "./Footer.scss";

function Footer() {
    return (
        <div className="footer-container">
            <span>Let's connect</span>
            <div>
                <a href="https://github.com/Anexon" target="_blank" ><i className="fab fa-github"></i></a>
                <a href="https://medium.com/@benru" target="_blank" ><i className="fab fa-medium"></i></a>
                <a href="https://twitter.com/benRuTJ" target="_blank"><i className="fab fa-twitter"></i></a>
                <a href="https://www.linkedin.com/in/tjuarezruben/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
            </div>
        </div>
    )
}

export default Footer;