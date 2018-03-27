const fs = require('fs');
const path = require('path');
const ReducersPath = path.join(__dirname, '..', 'src', 'components', 'reducers');
const tmplPath = path.join(__dirname, '..', 'tpl', 'reducer.tpl');
const Mustache = require('mustache');
const log = require('color-log');
const _ = require('lodash');

const __ERRORS__ = {
  1: 'Error, missing template',
  2: 'Error, file already exists'
};

if (!fs.existsSync(tmplPath)) {
  log.error(__ERRORS__[1]);
  process.exit(1);
}

const tpl = fs.readFileSync(tmplPath, 'utf8');

module.exports = (name) => {
  let formattedName = name.toLowerCase().replace(/[-_|/\\]/, '');
  let filePath = path.join(ReducersPath, _.deburr(formattedName) + 'Reducer.js');

  if (fs.existsSync(filePath)) {
    log.error(__ERRORS__[2]);
    process.exit(1);
  }

  let fileContent = Mustache.render(tpl, { 
    reducerName  : formattedName, 
    originalName : name 
  });

  fs.writeFileSync(_.deburr(filePath), fileContent);
  
  log.info('Created');
}