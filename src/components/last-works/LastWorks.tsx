import React, { useEffect } from "react";
import "./LastWorks.scss";
import { showOnScroll } from "../../services/showOnScroll";
function SpecializationIn() {
    useEffect(() => {
        showOnScroll.checkShowOnScrollItems(".last-works-container");
    }, [])
    return (
        <>
            <div className="last-works-title">
                <h2>Últimos trabajos</h2>
                <p>Me gusta mantenerme activo y reciclando habilidades en múltitud de proyectos, estos son algunos de los más recientes...</p>
            </div>
            <div className="last-works-container">
                <div className="column">
                    <div className="cell">
                        <div className="inner-content">
                            <div>
                                <h3>Trampoline</h3>
                                <small>Estudio de Productos Digitales</small>
                                <p>Cofundador, Project Manager y técnico en áreas de inteligencia de negocio, analítica, software y ventas.</p>
                            </div>
                        </div>
                    </div>
                    <div className="cell">
                        <div className="inner-content">
                            <div>
                                <h3>Willimbu</h3>
                                <small>Estudio de Software</small>
                                <p>CEO y desarrollador fullstack; desarrollo de apliciones nativas, web, infraestructura, APIs, aplicando metodologías Agile.</p>
                            </div>
                        </div>
                    </div>
                    <div className="cell">
                        <div className="inner-content">
                            <div>
                                <h3>Angular Málaga</h3>
                                <small>Coordinador y ponente</small>
                                <p>Colaboración en la organización de múltiples meetups y ponente. Contribuidor en el repositorio de Angular Communities.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="cell">
                        <div className="inner-content">
                            <div>
                                <h3>BuscoExtra</h3>
                                <small>ETT Digital Especializada en Hostelería</small>
                                <p>Director de operaciones, coordinador entre departamentos, desarrollo de software, negocio, analítica y ventas.</p>
                            </div>
                        </div>
                    </div>
                    <div className="cell">
                        <div className="inner-content">
                            <div>
                                <h3>BuscoExtra</h3>
                            </div>
                        </div>
                    </div>
                    <div className="cell">
                        <div className="inner-content">
                            <div>
                                <h3>Angular Málaga</h3>
                                <small>Coordinador y ponente</small>
                                <p>Colaboración en la organización de múltiples meetups y ponente. Contribuidor en el repositorio de Angular Communities.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="cell">
                        <div className="inner-content">
                            <div>
                                <h3>BuscoExtra</h3>
                            </div>
                        </div>
                    </div>
                    <div className="cell">
                        <div className="inner-content">
                            <div>
                                <h3>BuscoExtra</h3>
                            </div>
                        </div>
                    </div>
                    <div className="cell">
                        <div className="inner-content">
                            <div>
                                <h3>QBBO</h3>
                                <p>Desarrollo y comercialización de una aplicación de ofertas en negocios nocturnos.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SpecializationIn;
