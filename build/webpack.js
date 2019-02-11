const path           = require('path');
const webpack        = require('webpack');

module.exports = function (grunt) {
    const isProduction = grunt.cli.tasks[0] === 'release';
    const plugins = [
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map',
            exclude: [/^(?!(binary)).*$/],
        }),
        new webpack.optimize.UglifyJsPlugin({
            include  : /^binary.*/,
            minimize : true,
            sourceMap: true,
            compress : {
                warnings: false,
            },
        }),
    ];

    if (!isProduction) {
        plugins.push(
            function() {
                this.plugin('watch-run', function(watching, callback) {
                    console.log('');
                    grunt.log.ok('Compile started at ' + new Date());
                    callback();
                });
            }
        );
    }

    const common_options = {
        node: {
            fs    : 'empty',
            net   : 'empty',
            tls   : 'empty',
            crypto: 'empty',
            Buffer: false,
        },
        cache: true,
        externals: {
            'jquery' : {
                commonjs: "jquery",
                commonjs2: "jquery",
                amd: "jquery",
                root: "jQuery"
            },
        },
        entry: {
            binary       : './src/js/binary',
            'binary.more': './src/js/binary.more',
        },
        output: {
            path    : path.resolve(__dirname, '../' + global.dist),
            filename: '[name].js',
            libraryTarget: 'umd',
        },
        module: {
            loaders: [
                {
                    test   : /\.js$/,
                    exclude: /node_modules|oauth/,
                    loader : 'babel-loader',
                    query  : {
                        presets: ['es2015'],
                        compact: false,
                    },
                },
            ],
        },
        plugins: plugins,
    };

    const watch_options = Object.assign({ watch: true }, common_options);

    return {
        build: common_options,
        watch: watch_options,
    }
};
