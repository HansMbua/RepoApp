import * as  request from "request";
import {User} from "./user";
import {Repo} from "./Repo";

const OPTIONS: any ={
    headers:{
        'User-Agent':'request'
    },
    json: true
}
export class GitHubApiService{
    getUserInfo(userName: string,cb:(user:User)=>any){

       request.get('https://api.github.com/users/'+userName,OPTIONS,(error:any, response:any, body:any)=>{
        let  theUser = new User(body);
        cb(theUser);

       })
    }
    getRepos(userName: string,cb:(repos:Repo[]) => any){
        request.get('https://api.github.com/users/'+userName+'/repos',OPTIONS,(error:any, response:any, body:any)=>{
          let repos = body.map((repo:any) => new Repo(repo));
           cb(repos);
        })
    }
}
