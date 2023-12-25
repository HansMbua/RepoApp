import * as  request from "request";
import {User} from "./user";
export class GitHubApiService{
    getUserInfo(userName: string,cb:(user:User)=>any){
        let options: any ={
            headers:{
                'User-Agent':'request'
            },
            json: true
        }
       request.get('https://api.github.com/users/'+userName,options,(error:any, response:any, body:any)=>{
        let  theUser = new User(body);
        cb(theUser);

       })
    }
    getRepos(userName: string){

    }
}
