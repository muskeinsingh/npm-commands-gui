#!/usr/bin/env node
const chalk = require('chalk');
const inquirer  = require('inquirer');
const fs = require('fs');
const shell = require('shelljs');
const exitCommandName = "exit";
(() => {
    if (fs.existsSync('package.json')) {
        const packageJsonData = fs.readFileSync('package.json');
        const scripts = JSON.parse(packageJsonData).scripts;
        const scriptsWithExit = addExitCommand(scripts);      
        const scriptKeys = Object.keys(scriptsWithExit);
        inquirer.prompt([
            {
                type: 'list',
                name: 'command',
                message: 'Choose the command you wish to run?',
                choices: scriptKeys,
            },
        ])
        .then(commands => {
            if(commands.command === exitCommandName) {
                console.log(chalk.yellowBright('Exiting...'));
                process.exit();
            } else {
                console.log(chalk.yellowBright('Running...:', commands.command));
                shell.exec('npm run ' + commands.command)
            }
        });
    } else {
        console.log(
            chalk.red('No package.json exists in this directory.')
        );
    }
})();

function addExitCommand(commands) {
    commands[exitCommandName] = ""; // could potentially write anything in value - not being executed
    return commands;
}
