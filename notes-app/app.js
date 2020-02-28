// const validator = require('validator');
const notes = require('./notes');
// const chalk = require('chalk');
const yargs = require('yargs');

//Create  add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        //in command line we write title as ' --title="some title" '
      title: {
          describe: 'Note title',
          demandOption: true, // made this option required, by default it's not require and demandOption === false
          type: 'string'
      },
        body: {
          describe: 'Note body',
          demandOption: true,
          type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    },
});

//remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    },
});

//list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        notes.listNotes();
    }
});

//read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
});

yargs.parse();

/*
    colorize data in console.log with chalk package
*/
// console.log(chalk.blue.inverse.bold('Success!!'));

/*
    array with value from console
*/
// console.log(process.argv)

/*
    validate data with validator package
*/
// console.log(validator.isEmail('lolo@lolo.ru'))

/*
    get data from command line with process.argv
*/
// const command = process.argv[2];
// if (command === 'add') {
//     console.log('Adding note!')
// } else if (command === 'remove') {
//     console.log('Removing note!')
// }

/*
    get data from command line with yargs package
*/
// console.log(yargs.argv);
