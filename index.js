#!/usr/bin/env node

const currentNodeVersion = process.versions.node;
const semver = currentNodeVersion.split('.');
const major = semver[0];

console.log()
if (major < 18) {
  console.error(
    'You are running Node ' +
      currentNodeVersion +
      '.\n' +
      'Requires Node 18 or higher. \n' +
      'Please update your version of Node.'
  );
  process.exit(1);
}

const fs = require('fs-extra')
const path = require('path');

const templateDir = path.join('', 'template');
if (fs.existsSync(templateDir)) {
    fs.copySync(templateDir, './');
} 