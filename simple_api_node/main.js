const http = require("http");
const url = require("url");
const fs = require('fs');
const server = http.createServer((req, res) => {
    const data = fs.readFileSync('User_api/userapi.json', "utf-8");
    const objData = JSON.parse(data);
    // console.log(req.url);
    if (req.url == '/') {
        res.end("hello from the home side nabeel");
    } else if (req.url == '/about') {
        res.end('hello from the about side');
    } else if (req.url == '/contact') {
        res.end('hello from the contact side');
    } else if (req.url == '/userapi') {
        // res.end('hello from the user api side');
        res.writeHead(200, { 'content-type': 'application/json' })
        res.end(objData[2].name)
    } else {
        res.writeHead(404, { "Content-type": "text/html" });
        res.end('<h1 >Oops! </h1> <h2>404 Not Found </h2>Sorry, an error has occured, Requested page not found! ');
    }
});
server.listen(8000, "127.0.0.1", () => {
    console.log("listening to the port 8000");
});