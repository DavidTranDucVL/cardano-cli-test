#!/usr/bin/env node

const readFile = (filename) => {
    const fs = require('fs');
    
    fs.readFile(filename, 'utf8', function(err, data) {
        if (err) throw err;
        console.log(data);
    })
}

module.exports = {
    readFile: readFile
}