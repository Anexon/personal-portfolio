import React from 'react';
import './home-page.scss';

function HomePage() {
    return (
        <div className="page">
            <div className="personal-summary">
                <div className="summary-positioning">
                    <h1>Summary</h1>
                    <p>
                        Soy una persona dinámica y creativa, con gran capacidad 
                        para trabajar sobre presión y para gestionar situaciones imprevistas. <br/><br/>

                        A la hora de abordar un proyecto no pierdo la visión global y mantengo 
                        el foco sobre los objetivos principales. 
                        Para mí, la comunicación con el 
                        equipo es fundamental para orientar los esfuerzos hacía un mismo fin y 
                        mantener un ambiente enérgico.
                    </p>
                </div>
            </div>
            <div className="header-background"></div>
        </div>
    );
}

export default HomePage;
