const chalk = require('chalk');
const figlet = require('figlet');
(() => {
    console.log(
        chalk.yellowBright(
            figlet.textSync('Commands Select GUI for CLI', { horizontalLayout: 'full' })
        )
    );
    console.log(
      chalk.greenBright('Thank you for downloading Commands Select GUI for CLI.')
    );
})();
