//Node.js - server side JS Runtime
//how to import library - how to use library - how to use libraries
const fs = require('fs');

const userName = "Tristan";

fs.writeFile('user-info.txt', 'Name: ' + userName, (err) => {
    if(err){
        console.log(err);
    }

    console.log('successfully wrote content in to the file.');
});

console.log(userName);