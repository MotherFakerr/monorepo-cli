/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const fs = require('fs');
const { resolve } = require('path');

let entryFile = '';
if (fs.existsSync('./src/index.tsx')) {
    entryFile = './src/index.tsx';
} else {
    entryFile = './src/index.ts';
}

module.exports = {
    entry: resolve(entryFile),
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
