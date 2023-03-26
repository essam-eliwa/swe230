////ES6 modern JS

import * as http from 'node:http';
import * as fs from 'node:fs';

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const hostname = "127.0.0.1";
const port = 8000;

// Create HTTP server
const server = http.createServer(httpHandler);
//const homePageHTML = fs.readFileSync(path.join(__dirname, 'demofile.html'), "utf8"); 
function httpHandler(req, res) {
    const homePageHTML = fs.readFileSync(path.join(__dirname, 'demofile.html'), "utf8");
    console.log('server.., at ' + __dirname);
  // The fs.readFile() method is used to read files on your computer
  if (req.url === '/') {
    res.writeHead(200, {'content-type': 'text/html'});
    res.write(homePageHTML);
    res.end();
} else {
    res.writeHead(404, {'content-type': 'text/html'});
    res.write('<h1>404 ERORO - Sorry, page not found!</h1>');
    res.end();
}
}

// Prints a log once the server starts listening
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});