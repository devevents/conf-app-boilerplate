'use strict';

module.exports = {

    source: {
        jade: './src/**/*.jade',
        ts: './src/**/*.ts',
        sass: './src/**/*.scss',
        files: {
            sass: './src/app/styles.scss'
        }

    },

    build: {
        html: './www/',
        css: './www/assets/css/',
        sourceMaps: './'
    }
};
