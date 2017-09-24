const path = require('path');
const webpack = require('webpack');
const HTML = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./bandles/pug');
const devserver = require('./bandles/devserver');
const sass = require('./bandles/sass');
const css = require('./bandles/css');
const extractCSS = require('./bandles/css.extract');
const uglifyJS = require('./bandles/js.uglify');

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
          filename: 'js/[name].js'
        },
        plugins: [
            new HTML({
                filename: 'index.html',
                chunks: ['index', 'common'],
                template: PATHS.src + '/pages/index/index.pug'
            }),
            new HTML({
                filename: 'blog.html',
                chunks: ['blog', 'common'],
                template: PATHS.src + '/pages/blog/blog.pug'
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'common'
            }),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery'
            })
        ]
    },
    pug()
);

module.exports = (env) => {
    if (env === 'production') {
        return merge(
            [
                common,
                extractCSS(),
                uglifyJS()
            ]
        );
    }
    if (env === 'development') {
        return merge(
            [
                common,
                devserver(),
                sass(),
                css()
            ]
        );
    }
};