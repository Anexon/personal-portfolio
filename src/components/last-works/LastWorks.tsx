import React, { useEffect } from "react";
import "./LastWorks.scss";
import { showOnScroll } from "../../services/showOnScroll";
function SpecializationIn() {
    useEffect(() => {
        showOnScroll.checkShowOnScrollItems(".last-works-container");
    }, [])
    return (
        <div className="last-works-container">
            <div className="column">
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
            </div>
            <div className="column">
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
            </div>
            <div className="column">
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
            </div>
        </div>
    );
}

export default SpecializationIn;
