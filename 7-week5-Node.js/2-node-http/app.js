const http = require('http')
const url = require('url');

const server = http.createServer((req, res) => {
    console.log(url.parse(req.url, true).pathname);
    let pathname = url.parse(req.url, true).pathname
    // console.log(url.parse(req.url, true));
    console.log(pathname.substr(1));


    if (req.url === '/') {
        // res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write('This is my first node server')
        res.end()
    } else {
        // res.writeHead(404, { 'Content-Type': 'text/html' })
        res.write('error domain')
        res.end()
    }

})

server.listen(3001)