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

    if(req.method === 'POST'){

        let body = '';

        req.on('end', () => {
            console.log(body);

            //split the body
            const userName = body.split('=')[1];

            res.end('<h1>'+ userName +'</h1>');

        });


        req.on('data', (chunk) => {
            body += chunk;
        });
    }else{
        //send response response to the UI
        //In which format- sending data to the UI  - HTML
        //set content type
        res.setHeader('Content-Type','text/html');
        res.end('<form method="POST"><input type="text" name="username"><button type="submit">Create User</button></form>');
    }
});

//set the port number to start the server
server.listen(8080);