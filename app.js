//import library - express
const express = require("express");

const app = express();

//middlware to handle the request when click on submit button
app.use((req, res, next) => {
    let body = '';

    req.on('end', ()=>{
        const userName = body.split("=")[1];
        if(userName){
            req.body = { name : userName };
        }
        next();
    });

    req.on('data', (chunk) => {
        body += chunk;
    });
});


//middleware to handle the request GET
app.use((req, res, next) => {

  if(req.body){
    return res.send('<h1> Welcome User : ' + req.body.name + '</h1>');
  }  

  res.send(
    '<form method="POST"><input type="text" name="username"><button type="submit">Create User</button></form>'
  );
});

app.listen(8080);
