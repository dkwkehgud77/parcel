git init
// git config --global core.autocrlf input
// git config --global user.name 'dkwkehgud77'
// git config --global user.email 'dkwkehgud77@gmail.com' 
// git config --global --list

git status
git add .
git status 

// 버전 생성 -m 매시지
git commit -m 'Start project'
git log

git remote add origin https://github.com/dkwkehgud77/parcel.git
git push origin master 


npm init -y
npm i -D webpack webpack-cli webpack-dev-server@next

package.json
{
  "name": "webpack-template-basic",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "webpak-dev-server --mode development",
    "build": "webpack --mode production"  
  },
