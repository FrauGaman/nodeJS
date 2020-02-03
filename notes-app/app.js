// const validator = require('validator');
const getNotes = require('./notes');
const chalk = require('chalk');

console.log(chalk.blue.inverse.bold('Success!!'));

const msg = getNotes();

console.log(msg);

//array with value from console
// console.log(process.argv)

// console.log(validator.isEmail('lolo@lolo.ru'))

const command = process.argv[2];

if (command === 'add') {
    console.log('Adding note!')
} else if (command === 'remove') {
    console.log('Removing note!')
}
