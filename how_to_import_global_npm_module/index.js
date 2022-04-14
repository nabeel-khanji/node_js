import chalk from 'chalk';
import validator from 'validator';

console.log(chalk.blue('Hello world!'));
console.log(chalk.green.bold('Hello world!'));
console.log(chalk.red.italic('Hello world!'));
console.log(chalk.yellow.underline('Hello world!'));
console.log(chalk.greenBright.inverse('success'));
console.log(chalk.redBright.inverse('false'));

const result = validator.isEmail('nabeelshakeel966@gmail.com');
console.log(result ? chalk.green(  result): chalk.red.inverse(result));