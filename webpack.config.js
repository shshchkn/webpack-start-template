const path = require('path');
const HTML = require('html-webpack-plugin');

const PATHS = {
    src: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build')
};

module.exports = {
    entry: PATHS.src + '/pages/index/index.js',
    output: {
      path: PATHS.build,
      filename: '[name].js'
    },
    plugins: [
        new HTML({
            template: PATHS.src + '/pages/index/index.pug'
        })
    ],
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true
                }
            }
        ]
    }
};