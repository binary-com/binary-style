module.exports = {
    all: {
        options: {
            style    : 'expanded',
            sourcemap: 'none',
        },
        files: [
            { src: 'src/sass/all.scss',              dest: global.dist + '/binary.css' },
            { src: 'src/sass/jquery-ui-custom.scss', dest: global.dist + '/binary.more.css' },
            { src: 'src/sass/all.isolated.scss',     dest: global.dist + '/binary.isolated.css' },
            { src: 'src/sass/oauth.scss',            dest: global.dist + '/oauth.css' },
            { src: 'src/sass/oneall.scss',           dest: global.dist + '/oneall.css' },
        ]
    }
};
