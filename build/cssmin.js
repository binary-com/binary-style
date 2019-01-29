module.exports = {
    all: {
        options: {
            inline: ['none'],
        },
        files: [
            { src: global.dist + '/binary.css',          dest: global.dist + '/binary.css' },
            { src: global.dist + '/binary.more.css',     dest: global.dist + '/binary.more.css' },
            { src: global.dist + '/binary.isolated.css', dest: global.dist + '/binary.isolated.css' },
            { src: global.dist + '/oauth.css',           dest: global.dist + '/oauth.css' },
            { src: global.dist + '/oneall.css',          dest: global.dist + '/oneall.css' },
            {
                expand: true,
                cwd   : 'src/css',
                src   : '*.css',
                dest  : global.dist,
                ext   : '.css',
            },
        ],
    },
};
