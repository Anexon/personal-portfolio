import React from "react";
import "./ContactButton.scss";
import { Text } from "../../containers/Language";

function ContactButton(props: any) {
    return (
        <div className="share-button">
            <span><Text tid="letstalk"></Text></span>
            <a href="https://github.com/Anexon" target="_blank" ><i className="fab fa-github"></i></a>
            <a href="https://medium.com/@benru" target="_blank" ><i className="fab fa-medium"></i></a>
            <a href="https://twitter.com/benRuTJ" target="_blank"><i className="fab fa-twitter"></i></a>
            <a href="https://www.linkedin.com/in/tjuarezruben/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
        </div>
    );
}

export default ContactButton;
