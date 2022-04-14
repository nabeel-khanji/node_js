const http = require('http');

const server =http.createServer((req,res)=>{
    res.end("hello from the others side nabeel");

});

server.listen(8000,'127.0.0.1',(err)=>{
    console.log(err);
    console.log('listening to the port number 8000');
});