const fs = require('fs');
const path = require('path');
const ComponentsPath = path.join(__dirname, '..', 'src', 'components');
const tmplPath = path.join(__dirname, '..', 'tpl', 'component.tpl');
const Mustache = require('mustache');
const log = require('color-log');
const _ = require('lodash');

const __ERRORS__ = {
  1: 'Error, missing template',
  2: 'Error, file already exists',
  3: 'Unable to create file, please check the path'
};

if (!fs.existsSync(tmplPath)) {
  log.error(__ERRORS__[1]);
  process.exit(1);
}

const tpl = fs.readFileSync(tmplPath, 'utf8');

module.exports = (name, subfolder) => {
  subfolder = subfolder || "";
  let formattedName = name.toLowerCase().replace(/[-_|/\\]/, '');
  let filePath = path.join(ComponentsPath, subfolder, _.deburr(formattedName) + '.js');

  let folder = path.dirname(filePath);

  if(!fs.existsSync(folder))
    fs.mkdirSync(folder, '0755', true);
  else if(!fs.lstatSync(folder).isDirectory()) {
    log.error(__ERRORS__[3]);
    process.exit(1);
  }

  if (fs.existsSync(filePath)) {
    log.error(__ERRORS__[2]);
    process.exit(1);
  }

  let fileContent = Mustache.render(tpl, { 
    componentName : formattedName.substring(0, 1).toUpperCase() + formattedName.substring(1, formattedName.length).toLowerCase(), 
    originalName  : name 
  });

  fs.writeFileSync(filePath, fileContent);

  log.info('Created');
}