
# to Do List

Full Stack Application.

<p align="center">
  <img src="./toDoList.jpg" width= 600 >
</p>

## Realizado con:
- React
- MongoDB 
- Express
- Node
s

## Recursos


bcrypt
bcryptjs
validator
cookie-parser
jsonwebtoken





Para correrlo en terminal: npm run server
npm init --yes
npm i express
npm i dotenv
npm i --save-dev nodemon concurrently
npm i mongoose
npm i bcrypt
npm i bcryptjs
npm i validator
npm i cookie-parser
npm i jsonwebtoken

"scripts": {
"test": "echo \"Error: no test specified\" && exit 1",
"server": "nodemon server.js --ignore client",
"client": "cd client && npm start",
"dev": "concurrently \"npm run client\" \"npm run server\""
},

//CLIENT
npx create-react-app
npm i react-router-dom
npm i axios
npm i sass
en el package.json, agregamos:
"proxy": "http://localhost:5000"

corren ambas terminales en: npm run dev

HEROKU
package.json
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1",
"server": "nodemon server.js --ignore client",
"client": "cd client && npm start",
"dev": "concurrently \"npm run client\" \"npm run server\"",
"install-client": "cd client && npm install",
"build": "cd client && npm run build",
"heroku-postbuild": "npm run install-client && npm run build",
"start": "node server.js"
}
