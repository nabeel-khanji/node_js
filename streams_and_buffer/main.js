// readble - stream which is used for read operation
// writeable - stream which is used for write operation
// duplex - stream which can be used for both read and write operation
// transform - A type of duplex stream where the output is computed based on the input
import fs from 'fs';
import http from 'http';
const server = http.createServer();
server.on('request', (req, res) => {
    //     fs.readFile('input.txt', (err, data) => {
    //         if (err) return console.error(err);
    //         res.end(data.toString());
    //     })
    const rstream = fs.createReadStream('inpt.txt');
    rstream.on('data', (chunkdata) => {
        res.end(chunkdata)
    })
    rstream.on('end', () => {
        res.end()
    })
    rstream.on('error', (err) => {
        console.log(err);
        res.end('file not found')
    })
})

server.listen(8000, '127.0.0.1', () => {
    console.log('listen to port number 8000');
});