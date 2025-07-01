// this is common js example which use requires and load modules in sync ,but if we go to package.json and change type to module which is EcmaScript it will use import and load modules async
// const { createServer } = require('node:http'); this line crash when set to type module
import {createServer} from "http" //this will run on ecmascript

const hostname = '127.0.0.1';
const port = 3001;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello World!</h1>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});