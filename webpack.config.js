const path = require('path');

module.exports = {
    entry: './App.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'bundle')
    }
}