//console.log('Hello Node.JS!');

////The Old Way
//const http = require('http');

////ES6 modern JS
import * as http from 'node:http';

const hostname = "127.0.0.1";
const port = 8000;
const html_data = 'Hello Fareed';

// Create HTTP server
const server = http.createServer(function (req, res) {
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, { "Content-Type": "text/html" });

  // Send the response body "Hello World"
  res.end(`
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Welcome to Node.JS</h1>
    <br> ${html_data}
    
    
</body>
</html>
  
  `);
});

// Prints a log once the server starts listening
server.listen(port, hostname, function () {
  console.log(`Server running at http://${hostname}:${port}/`);
});
