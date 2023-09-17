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

const spawn = require('cross-spawn')
const path = require('path')



const fs = require('fs-extra')

const templateDir = path.resolve(__dirname, 'template')
if (fs.existsSync(templateDir)) {
    fs.copySync(templateDir, './');
    fs.renameSync(path.resolve('gitignore'), '.gitignore')
}

spawn.sync('npm', ['install', '-g', 'pnpm'], { stdio: 'inherit' })
spawn.sync('git', ['init'], { stdio: 'inherit' })

const packagesJson = require(path.resolve(templateDir, 'package.json'))
const rootDependencies = Object.keys(packagesJson.dependencies).map(key => `${key}@${packagesJson.dependencies[key]}`)
spawn.sync('pnpm', ['install', '-w', ...rootDependencies], { stdio: 'inherit' })


const repos = fs.readdirSync(path.resolve(templateDir, 'packages'))
repos.forEach((repo) => {
    const packagesJson = require(path.resolve(templateDir, 'packages', repo, 'package.json'))
    const dependencies = Object.keys(packagesJson.dependencies).map(key => `${key}@${packagesJson.dependencies[key]}`)
    spawn.sync('pnpm', ['install', ...dependencies], { stdio: 'inherit' })
})