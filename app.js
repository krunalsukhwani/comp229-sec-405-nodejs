//import library - express
const express = require('express');

const app = express();

//middleware to handle the request - GET
app.use((req, res, next) => {
    res.send('<h1>Hello Friends</h1>');
});


app.listen(8080);