# cardano-cli-test

## Prerequisites
1. `nvm install v10.20.1` or `nvm use v10.20.1`
2. `npm i nexe -g`
3. `npm i yarn -g`
4. `yarn install`
5. You need to have `trezor-bridge` installed

## Run
Connect trezor to pc and run:
```
sudo node .
```
You should see public key printed

## Package
```
nexe bin/index.js
```
Should create `cardano-cli-test` file on linux; or `cardano-cli-test.exe` file on windows

## Run packaged file
Connect trezor/ledger to pc and run:
```
sudo ./cardano-cli-test
```
You should see public key printed after exporting on HW wallet
