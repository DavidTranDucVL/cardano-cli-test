#!/usr/bin/env node

const writeFile = (filename) => {
    const fs = require('fs');
    
    fs.writeFile(filename, 'Hello World!', function (err) {
        if (err) return console.log(err);
    })
}

module.exports = {
    writeFile: writeFile
}