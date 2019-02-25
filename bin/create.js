#!/usr/bin/env node
'use strict';

const argv = require('yargs').argv;
const fse = require('fs-extra');
const path = require('path');
const { generatePackageJson, generateReadme } = require('../lib/generateFiles');

const logRed = (...args) => console.log('\x1b[31m', ...args, '\x1b[0m');
const logGreen = (...args) => console.log('\x1b[32m', '✓', ...args, '\x1b[0m');

const targetDirectory = argv._[0];

if (!targetDirectory) {
	logRed('No target directory was specified.');
	process.exit(1);
}

async function checkDirectory(target) {
	const exists = await fse.pathExists(targetDirectory);

	if (exists) {
		throw new Error(`The directory ${target} already exists.`);
	}

	return target;
}

async function createTargetDirectory(target) {
	try {
		await fse.mkdirp(target);
		logGreen(`Successfully created ${target}`);
		return target;
	} catch (error) {
		throw new Error(`An error occured when creating ${target}`);
	}
}

async function copyFilesToTarget(target) {
	try {
		const exampleDirectory = `${__dirname}/../examples/default`;
		await fse.copy(exampleDirectory, targetDirectory);
		logGreen(`Successfully copied files to ${target}`);
		return target;
	} catch (error) {
		throw new Error(`An error occured when copying the files.`);
	}
}

async function writeFiles(target) {
	const basename = path.basename(target);
	const packageJson = generatePackageJson(basename);
	const readme = generateReadme(basename);

	try {
		await Promise.all([
			fse.outputJSON(`${target}/package.json`, packageJson, {
				spaces: '\t',
			}),
			fse.outputFile(`${target}/README.md`, readme),
		]);
	} catch (error) {
		throw new Error(`An error occured generating files.`);
	}
}

checkDirectory(targetDirectory)
	.then(createTargetDirectory)
	.then(copyFilesToTarget)
	.then(writeFiles)
	.then(() => process.exit(0))
	.catch(error => {
		logRed('\n', error, '\n');
		process.exit(1);
	});
