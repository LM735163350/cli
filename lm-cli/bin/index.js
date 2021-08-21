#!/usr/bin/env node

const lmCliTools = require('lm-cli-tools')
const process = require('process');
const { isBuffer } = require('util');
const argv = process.argv;
console.log(argv)
const command = argv[2]
const commandInit = lmCliTools[command]
const [ option, param ] = argv.slice(3)
console.log(option. param)
if (command) {
    if (commandInit) {
        commandInit()
    } else {
        console.log('命令不存在')
    }
} else {
    console.log('请输入命令')
}



// console.log(lmCliTools.init());