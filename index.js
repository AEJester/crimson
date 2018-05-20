#!/usr/bin/env node
const program = require("commander");
const run = require("./src/run.js");
const debug = require("./src/debug/debug");
program
.version('0.0.1')
.description("A programming language compiler and debugger.");

program
.command("run <path>")
.alias("r")
.description("Runs the code in the file specified. If there are any spaces in the path, replace them with an \"::\"")
.action(path => {
    run(path);
})

program
.command("debug <path>")
.alias("d")
.description("Debugs the code in the file specified. If there are any spaces in the path, replace them with an \"::\"")
.action(path => {
    debug(path);
})

program.parse(process.argv)