# Dev Connector  [<img  src="https://img.shields.io/badge/%20Dev%20Connactor -Live-brightgreen"/>](https://dev-connected-mern.herokuapp.com/)
> social media for developers 

This is a MERN stack appication . It's small social networking application includes authentication, profiles and forum posts.

# Changes to GitHub API authentication

It would also be worth adding your default.json config file to .gitignore If git has been previously tracking your default.json file then...

```
git rm --cached config/default.json
```
---
# Quick Start  ![rocket](https://github.githubassets.com/images/icons/emoji/unicode/1f680.png)

### Add a default.json file in config folder with the following
```
{
  "mongoURI": "<your_mongoDB_Atlas_uri_with_credentials>",
  "jwtSecret": "secret",
  "githubClientId": "<githubClientId>",
  "githubSecret" : "<githubSecret>"
}
```
### Install server dependencies

    npm install or npm i
    
### Install client depandencis

    cd client and npm install or npm i
### Run both Express & React from root

    npm run dev
    
Check in browser on [http://localhost:5000/](http://localhost:5000/)

---
# App info

### Author
Sabuj Hasan Sarker
### Live 
[Dev-connactor](https://dev-connected-mern.herokuapp.com/)
