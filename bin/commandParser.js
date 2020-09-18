#!/usr/bin/env node

const parseCommand = (args) => {
    if (args.length === 0 || args[0] === '--help' || args[0] === '-h') {
        const showHelp = require('./showHelp');
        showHelp.showHelp()
    } else if (args[0] === 'trezor') {
        const trezor = require('./trezor');
        trezor.getPublicKey()
    } else if (args[0] === 'ledger') {
        const ledger = require('./ledger');
        ledger.getPublicKey()
    } else if(args[0] === 'readFile' && args.length == 2) {
        const readFile = require('./readFile');
        readFile.readFile(args[1])
    } else if(args[0] === 'writeFile' && args.length == 2) {
        const writeFile = require('./writeFile');
        writeFile.writeFile(args[1])
    }
}

module.exports = {
    parseCommand: parseCommand
}