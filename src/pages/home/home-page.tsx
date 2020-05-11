import React from 'react';
import './home-page.scss';
import KnowledgeAreas from '../../components/knowledge-areas/knowledge-areas';

const HomePage = () => {
    return (
        <div className="page">
            <div className="summary-section">
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
                            <br></br>
                            <br></br>
                            <span>#entrepeneur</span>
                            <span>#adventurer</span>
                            <span>#curious</span>
                            <span>#creative</span>
                        </p>
                        <div className="separator"></div><br/>
                        <div className="social-media-icons">
                            <a href="https://www.linkedin.com/in/tjuarezruben/" rel="noopener noreferrer" target="_blank"><img alt="" src="resources/linkedin.png"/></a>
                            <a href="https://medium.com/@benru" rel="noopener noreferrer" target="_blank"><img alt="" src="resources/medium.svg"/></a>
                            <a href="https://twitter.com/benRuTJ" rel="noopener noreferrer" target="_blank"><img alt="" src="resources/twitter.png"/></a>
                            <a href="https://github.com/Anexon" rel="noopener noreferrer" target="_blank"><img alt="" src="resources/github.png"/></a>
                            <br></br>
                            <small>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></small>
                        </div>
                    </div>
                </div>
                <div className="header-background"></div>
            </div>
            <KnowledgeAreas/>
        </div>
    );
}

export default HomePage;
