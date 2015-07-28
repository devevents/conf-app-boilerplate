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

    browserSync: {
      html: 'www/**/*.html',
      js: 'www/app/**/*.js',
      css: 'www/assets/css/**/*.css',
      img: 'www/assets/img/**/*'
    },

    build: {
      html: './www/',
      css: './www/assets/css/',
      sourceMaps: './'
    }
};
