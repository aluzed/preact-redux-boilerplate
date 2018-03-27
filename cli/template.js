const argv = require('minimist')(process.argv.slice(2));
const helpers = require('./helpers');
const log = require('color-log');

const handleReducer = require('./reducer');
const handleComponent = require('./component');

const __ERRORS__ = {
  1: 'Error, missing Args'
};

if(argv._.length < 2) {
  log.error(__ERRORS__[1]);
  console.log(helpers);
  process.exit(0);
}

switch(argv._[0]) {
  case 'reducer': 
    handleReducer(argv._[1]);
  break;

  case 'component': 
    handleComponent(argv._[1], argv._[2]);
  break;
}
