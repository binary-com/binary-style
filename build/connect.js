module.exports = function (grunt) {
    const rewrite = require('connect-modrewrite');
    const serveStatic = require('serve-static');
    const serveIndex  = require('serve-index');

    return {
        livereload: {
            options: {
                hostname: '127.0.0.1',
                port    : 443,
                protocol: 'https',
                base    : 'dist',
                open    : 'https://localhost.localdomain',
                middleware: function (connect, options) {
                    const middlewares = [
                        require('connect-livereload')()
                    ];

                    const rules = [
                        '^/binary-style/(.*)$ /$1'
                    ];
                    middlewares.push(rewrite(rules));

                    if (!Array.isArray(options.base)) {
                        options.base = [options.base];
                    }

                    const directory = options.directory || options.base[options.base.length - 1];
                    options.base.forEach(function (base) {
                        middlewares.push(serveStatic(base));
                    });

                    middlewares.push(serveIndex(directory));

                    return middlewares;
                }
            }
        },
        all: {
            options: {
                hostname : '127.0.0.1',
                port     : 443,
                protocol : 'https',
                base     : 'dist',
                keepalive: true,
                open     : 'https://localhost.localdomain',
                middleware: function (connect, options) {
                    const middlewares = [];

                    const rules = [
                        '^/binary-style/(.*)$ /$1'
                    ];
                    middlewares.push(rewrite(rules));

                    if (!Array.isArray(options.base)) {
                        options.base = [options.base];
                    }

                    const directory = options.directory || options.base[options.base.length - 1];
                    options.base.forEach(function (base) {
                        middlewares.push(serveStatic(base));
                    });

                    middlewares.push(serveIndex(directory));

                    return middlewares;
                }
            }
        }
    };
};
