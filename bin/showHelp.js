#!/usr/bin/env node

const showHelp = (args) => {
    console.log('Usage: cardano-cli-test')
    console.log('    trezor: get trezor public key')
    console.log('    ledger: get ledger public key')
    console.log('    readFile [path]: read file')
    console.log('    writeFile [path]: write Hello world! to the file')
    console.log('    -h, --help: show this help')
}

module.exports = {
    showHelp: showHelp
}