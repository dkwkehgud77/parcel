npm init -y
npm i -D webpack webpack-cli webpack-dev-server@next

vi package.json
{
  "name": "webpack-template-basic",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "webpak-dev-server --mode development",
    "build": "webpack --mode production"  
}

vi webpack.config.js
module.exports = {
    // 파일을 읽어들이기 시작하는 진입점 설정 
    entry: './js/main.js',
    
    // 결과물(번들)을 반환하는 설정 
    output: {
        // path: path.resolve(__dirname, 'dist'),
        // filename: 'main.js',
        clean: true
    }
}

npm run build 

  
