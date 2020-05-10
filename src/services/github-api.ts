import { fromFetch } from 'rxjs/fetch';
import { mergeMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { forkJoin } from 'rxjs';

export const GithubApi = {
    getRepost: () => {
        return fromFetch("https://api.github.com/users/anexon/repos").pipe(
            mergeMap((res)=>{
                return res.json();
            }),
            mergeMap((respos: any[])=>{
                let reposAbstract: Observable<any>[] = [];
                respos.forEach(repo=>{
                    reposAbstract.push(fromFetch(`https://raw.githubusercontent.com/${repo.full_name}/abstract.json`))
                })
                return forkJoin(reposAbstract);
            }),
            mergeMap((responses: any) => {
                let validResponseBodies: any[] = [];
                console.log("The responses: ", responses);
                responses.forEach((response: any) => {
                    if(response.status != 400) validResponseBodies.push(response.body.json());
                })
                return validResponseBodies;
            }),
            map((res)=>{
                console.log("Formatted responses: ", res);
                return [{
                    name: "Prueba",
                    html_url: "Prueba html"
                }, ()=>{console.log("No existe")}]
            })
        );
    }
}