
import React, { useEffect, useState} from 'react';
import './portfolio-page.scss';

function PortfolioPage(props: any){
    const [repos, setRepos] = useState([]);

    useEffect(()=>{
        props.githubApi.getRepos().subscribe((res: any)=>{
            setRepos(res)
        });
    }, [])

    return (
        <div className="page">
            {repos.map((repository: any, index)=>{
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
            })}
        </div>
    )
}


export default PortfolioPage;
