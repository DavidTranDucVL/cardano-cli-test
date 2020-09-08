#!/usr/bin/env node

console.log("Hello world!");

var TrezorConnect = require('trezor-connect').default;

TrezorConnect.manifest({
    email: 'developer@xyz.com',
    appUrl: 'http://your.application.com'
})

const result = TrezorConnect.cardanoGetPublicKey({
    path: "m/44'/1815'/0'"
});

console.log(result)

result.then((x)=> {
    console.log("Success")
    console.log(x)
}).catch((err) => {
    console.log("Failure")
    console.log(err)
})
