module.exports = {
    all: {
        files: [
            { expand: true, cwd: 'src/fonts',   src: ['**', '!**/*.json', '!**/*.md'], dest: global.dist + '/fonts/' },
            { expand: true, cwd: 'src/images/', src: ['**'],                           dest: global.dist + '/images/' },
            { expand: true, cwd: 'src/index/',  src: ['**'],                           dest: global.dist },
            { expand: true, cwd: 'src/js/',     src: ['oauth.js'],                     dest: global.dist },
        ],
    },
};
