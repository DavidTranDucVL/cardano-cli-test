#!/usr/bin/env node

const [node, appName, ...args] =  process.argv

const commandParser = require('./commandParser');
commandParser.parseCommand(args)