const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//bodyparse - to get data from the url , need to configure the URL
app.use(bodyParser.urlencoded({extended : false}));

//post request: display username in the heading tag - path: /user
app.post('/user', (req, res, next) => {
    return res.send('<h1>' + req.body.username + '</h1>');
});

//get request: display the form - path : /
app.get("/", (req, res, next) => {
  res.send(
    '<form action="/user" method="POST"><input type="text" name="username"><button type="submit">Create User</button></form>'
  );
});

app.listen(8080);
