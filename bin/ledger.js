#!/usr/bin/env node

const getPublicKey = () => {
    console.log("Hello world from ledger.js!");
    
    const TransportNodeHid = require('@ledgerhq/hw-transport-node-hid').default;
    const transport = TransportNodeHid.create()

    transport
        .then((transport) => {
            const Ledger = require('@cardano-foundation/ledgerjs-hw-app-cardano').default;
            const ledger = new Ledger(transport)
        
            const result = ledger.getExtendedPublicKey([2147485500,2147485463,2147483648])
            
            console.log(result)
            
            result.then((x) => {
                console.log("Success")
                console.log(x)
            }).catch((err) => {
                console.log("Failure")
                console.log(err)
            })
        })
        .catch((err) => {
            console.log("err")
            console.log(err)
        })
}

module.exports = {
    getPublicKey: getPublicKey
}