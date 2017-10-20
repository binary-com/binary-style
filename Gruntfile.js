module.exports = function (grunt) {
    // map release parameters to the required branch, origin, and target gh-pages sub-folder
    global.release_config = {
        production  : { branch: 'master', target_folder: '', origin: 'git@github.com:binary-com/binary-style.git', CNAME: 'style.binary.com' },
    };

    if (grunt.cli.tasks[0] === 'release') {
        Object.keys(global.release_config).forEach(function (target) {
            if (grunt.option(target)) {
                global.release_target = target;
            }
        });
    }

    if (global.release_target) {
        global.release_info  = global.release_config[global.release_target];
        global.branch_prefix = '';
        global.branch        = global.release_info.target_folder;
    } else {
        global.branch_prefix = 'br_';
        global.branch        = grunt.option('branch');
    }

    global.dist = `dist${global.branch ? `/${global.branch_prefix}${global.branch}` : ''}`;

    require('time-grunt')(grunt);

    require('load-grunt-config')(grunt, {
        configPath: process.cwd() + '/build',
        loadGruntTasks: {
            pattern: 'grunt-*',
            config : require('./package.json'),
            scope  : 'devDependencies',
        },
    });
};
