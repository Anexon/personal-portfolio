
import React, { useEffect, useState} from 'react';
import './portfolio-page.scss';

function PortfolioPage(props: any){
    const [repos, setRepos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        props.githubApi.getRepos().subscribe((res: any)=>{
            setRepos(res)
            setIsLoading(false)
        });
    }, [])

    return (
        <div className="page">
            <h1>Artículos</h1>
            <div className="posts-container">
                <div className="post-card">
                    <div className="post-photo" style={{backgroundImage: "url('/resources/medium_1.png')"}}></div>
                    <div className="post-body">
                        <h1><a href="https://medium.com/puntotech/c%C3%B3mo-usar-d3-con-webcomponents-44ea4a95a238">Cómo usar D3 con WebComponents</a></h1>
                        <p>La visualización de datos es un prisma de muchas caras; donde unos ven un simple gráfico de barras otros ven una clara tendencia de crecimiento, un objetivo cumplido o incluso un simple .json de datos sin contexto.</p>
                        <small><a href="https://medium.com/@benru">Rubén Triviño</a> en <a href="https://medium.com/puntotech">PuntoTech</a></small>
                        <small>Abril 18, 2020 - 5 min read</small>
                    </div>
                </div>
                <div className="post-card">
                    <div className="post-photo" style={{backgroundImage: "url('/resources/medium_2.gif')"}}></div>
                    <div className="post-body">
                        <h1><a href="https://medium.com/puntotech/gr%C3%A1fico-de-red-con-d3-js-en-canvas-fe39632efcba">Gráfico de Red con D3.js en Canvas</a></h1>
                        <p>Stencil permite crear un entorno de trabajo modular, exportable y accesible por los principales frameworks de desarrollo web. Esto es una gran ventaja para unir elementos visuales de varios proyectos y estandarizar su uso, reciclar código, html, css, etc..</p>
                        <small><a href="https://medium.com/@benru">Rubén Triviño</a> en <a href="https://medium.com/puntotech">PuntoTech</a></small>
                        <small>Mayo 5, 2020 - 8 min read</small>
                    </div>
                </div>
            </div>
            <h1>Repositorios</h1>
            <div className="project-cards-container">
                {
                    isLoading && (
                    <div className="loader">
                        <p>Cargando Repositorios</p>
                        <div className="loader-positioning">
                            <div className="lds-dual-ring"></div>
                        </div>
                    </div>
                    )
                }
                { !isLoading && (
                    repos.map((repository: any, index)=>{
                        return (
                            <div className="project-card" key={index}>
                                <h1>{repository.project_name}</h1>
                                <p>{repository.description}</p>
                                {
                                    repository.technologies.map((technology:string, techIndex: number)=>{
                                        return <span key={techIndex}>#{technology}</span>
                                    })
                                }
                            </div>
                        );
                    }))
                }
            </div>
        </div>
    )
}


export default PortfolioPage;
