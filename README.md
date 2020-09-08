# cardano-cli-test

## Prerequisites
1. Install node 12.9.1
2. `npm i nexe -g`
4. You need to have `trezor-bridge` installed

## Run
Connect trezor to pc and run:
```
node .
```
You should see public key printed

## Package
```
nexe bin/index.js
```
Should create `trezor-binary-test` file

## Run packaged file
Connect trezor to pc and run:
```
./trezor-binary-test
```
You should see public key printed
