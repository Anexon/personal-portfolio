
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
                            <br></br>
                            <br></br>
                        </div>
                    );
                }))
            }
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
        </div>
    )
}


export default PortfolioPage;
