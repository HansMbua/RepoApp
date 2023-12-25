"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GitHubApiService_1 = require("./GitHubApiService");
let svc = new GitHubApiService_1.GitHubApiService();
svc.getUserInfo("HansMbua", (user) => {
    console.log(user);
});
