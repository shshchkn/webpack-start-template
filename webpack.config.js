const path = require('path');
const HTML = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./config/pug');
const devserver = require('./config/devserver');

const PATHS = {
    src: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build')
};

const common = merge(
    {
        entry: {
            'index': PATHS.src + '/pages/index/index.js',
            'blog': PATHS.src + '/pages/blog/blog.js'
        },
        output: {
          path: PATHS.build,
          filename: '[name].js'
        },
        plugins: [
            new HTML({
                filename: 'index.html',
                chunks: ['index'],
                template: PATHS.src + '/pages/index/index.pug'
            }),
            new HTML({
                filename: 'blog.html',
                chunks: ['blog'],
                template: PATHS.src + '/pages/blog/blog.pug'
            })
        ]
    },
    pug()
);

module.exports = (env) => {
    if (env === 'production') {
        return common;
    }
    if (env === 'development') {
        return merge(
            [
                common,
                devserver()
            ]
        );
    }
};