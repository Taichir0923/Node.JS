const path = require('path');

module.exports = {
    entry: './App.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'bundle')
    },
    mode: 'development',
    watch: true,
    module: {
        rules: [
            {
                test: /\.(css||less)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    }
}