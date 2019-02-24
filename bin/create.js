#!/usr/bin/env node
'use strict';

const argv = require('yargs').argv;

const logRed = (...args) => console.log('\x1b[31m', ...args, '\x1b[0m');

const targetDirectory = argv._[0];

if (!targetDirectory) {
	logRed('No target directory was specified.');
	process.exit(1);
}

process.exit(0);
