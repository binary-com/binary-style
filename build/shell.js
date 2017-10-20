module.exports = function (grunt) {
    const error_missing_target = `Target is required: use ${Object.keys(global.release_config).map(t => `--${t}`).join(' or ')} to do a release.`;
    const colors = {
        error: '\\033[0;31m',
        info : '\\033[0;32m',
        warn : '\\033[1;33m',
        reset: '\\033[0m',
    };
    const prompt = (message, type) => (`echo "${colors[type || 'info']}>>${colors.reset} ${message}"`);
    const ghpagesCommand = () => (
        [
            `cd ${process.cwd()}/.grunt/grunt-gh-pages/gh-pages/all`,
            prompt('Updating...'),
            'git fetch origin gh-pages --quiet',
            'git reset --hard origin/gh-pages --quiet'
        ].join(' && ')
    );

    return {
        make_cname: {
            command: 'git config --get remote.origin.url',
            options: {
                callback: function (err, stdout, stderr, cb) {
                    if (!err) {
                        if (grunt.option('cleanup')) {
                            const origin = stdout.replace('\n', '');
                            let CNAME;
                            if (origin === global.release_info.origin) {
                                CNAME = global.release_info.CNAME;
                            }
                            if (CNAME) {
                                grunt.file.write(global.dist + '/CNAME', CNAME + "\n");
                                grunt.log.ok(`CNAME file created: ${CNAME}`);
                            } else {
                                grunt.log.error('CNAME file is not created: remote origin does not match.');
                            }
                        }
                    }
                    cb();
                },
                stdout: false
            }
        },
        check_origin: {
            command: 'git config --get remote.origin.url',
            options: {
                callback: function (err, stdout, stderr, cb) {
                    if (!err) {
                        const origin = stdout.replace('\n', '');
                        grunt.log.ok(`Remote origin: ${origin}`);
                        if (!global.release_target) {
                            grunt.fail.fatal(error_missing_target);
                        } else if (origin !== global.release_info.origin) {
                            grunt.fail.fatal(`Your remote origin does not match the ${global.release_target.toUpperCase()} repository.`);
                        }
                    }
                    cb();
                },
                stdout: false
            }
        },
        check_branch: {
            command: 'git symbolic-ref --short HEAD',
            options: {
                callback: function (err, stdout, stderr, cb) {
                    if (!err) {
                        const branch = stdout.replace('\n', '');
                        grunt.log.ok('Current branch: ' + branch);
                        if (!global.release_target) {
                            grunt.fail.fatal(error_missing_target);
                        } else if (branch !== global.release_info.branch) {
                            grunt.fail.fatal(`Current branch is not correct.\nIn order to release to ${global.release_target.toUpperCase()}, please checkout the "${global.release_info.branch}" branch.`);
                        }
                    }
                    cb();
                },
                stdout: false
            }
        },
        remove_folder: {
            command: grunt.option('folder') ?
                [
                    ghpagesCommand(),
                    prompt('Removing folders...'),
                    `rm -rf ${grunt.option('folder').split(',').join(' ')}`,
                    prompt('Committing...'),
                    'git commit -a -m "Remove folders" --quiet',
                    prompt('Pushing to origin...'),
                    'git push origin gh-pages --quiet'
                ].join(' && ') :
                prompt('Need to specify folders to remove: --folder=br_fix,br_beta,...', 'warn'),
            options: {
                stdout: true
            }
        },
        npm_publish: {
            command: [
                prompt('Copying files...'),
                `cp ${global.dist}/binary.* ${process.cwd()}`,
                prompt('Publishing to npm...'),
                'npm publish',
                prompt('Cleaning up...'),
                `rm ${process.cwd()}/binary.*`,
            ].join(' && '),
            options: {
                stdout: true
            }
        },
    }
};
