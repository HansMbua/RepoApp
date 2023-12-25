import {GitHubApiService} from './GitHubApiService';
import {User} from "./user";
import * as _ from 'lodash';
let svc = new GitHubApiService();
if (process.argv.length < 3) {
    console.log("Please pass the username as an argument");
}else{
    let username = process.argv[2];
    svc.getUserInfo(username,(user : User)=>{
        svc.getRepos(username,(repos)=>{
            let sortedRepos = _.sortBy(repos,[(repo) => repo.forkCount * -1] );
             user.repos = _.take(sortedRepos,5);
             console.log(user);
        });
    });
}


