const path = require('path');
const fse = require('fs-extra');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('Subgenerator spring-controller of side-by-side-extender JHipster blueprint', () => {
    describe('Sample test', () => {
        before(done => {
            helpers
                .run('generator-jhipster/generators/spring-controller')
                .inTmpDir(dir => {
                    fse.copySync(path.join(__dirname, '../test/templates/ngx-blueprint'), dir);
                })
                .withOptions({
                    'from-cli': true,
                    skipInstall: true,
                    blueprint: 'side-by-side-extender',
                    skipChecks: true
                })
                .withGenerators([
                    [
                        require('../generators/spring-controller'), // eslint-disable-line global-require
                        'jhipster-side-by-side-extender:spring-controller',
                        path.join(__dirname, '../generators/spring-controller/index.js')
                    ]
                ])
                .withArguments(['foo'])
                .withPrompts({
                    actionAdd: false
                })
                .on('end', done);
        });

        it('it works', () => {
            // Adds your tests here
            assert.textEqual('Write your own tests!', 'Write your own tests!');
        });
    });
});
