module.exports = {
    options: {
        processors: [
            require('autoprefixer')({browsers: ['last 2 version', 'last 5 iOS versions', 'last 3 Safari versions']})
        ],
    },
    dist: {
        src: [
            global.dist + '/binary.css',
            global.dist + '/binary.more.css',
            global.dist + '/binary.isolated.css',
            global.dist + '/oauth.css',
            global.dist + '/oneall.css',
        ],
    }
};
