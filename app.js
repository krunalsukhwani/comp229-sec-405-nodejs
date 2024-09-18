//import library: http
const http = require('http');

//create server
const server = http.createServer((req, res) => {

    if(req.url === '/favicon.ico'){
        res.end();
        return;
    }

    console.log('Incoming Request');
    console.log(req.method, req.url);

    //send response response to the UI
    //In which format- sending data to the UI  - HTML
    //set content type
    res.setHeader('Content-Type','text/html');
    res.end('<h1>Hello Friends, Welcome to the web development world</h1>');
});

//set the port number to start the server
server.listen(8080);