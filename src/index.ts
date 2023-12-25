import {GitHubApiService} from './GitHubApiService';
import {User} from "./user";
let svc = new GitHubApiService();
svc.getUserInfo("HansMbua",(user : User)=>{
    console.log(user);
});