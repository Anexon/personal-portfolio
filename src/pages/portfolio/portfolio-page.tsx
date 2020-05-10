
import React, { useEffect, useState} from 'react';

function PortfolioPage(props: any){
    const [repos, setRepos] = useState([]);

    useEffect(()=>{
        props.githubApi.getRepost().subscribe((res: any)=>{
            setRepos(res)
        });
    }, [])

    return (
        <div className="page">
            <p>Portfolio Page</p>
            {repos.map((repository: any, index)=>{
                return (
                    <div key={index}>
                        <p>{repository.name}</p>
                        <p>{repository.html_url}</p>
                        <br></br>
                        <br></br>
                    </div>
                );
            })}
        </div>
    )
}


export default PortfolioPage;
