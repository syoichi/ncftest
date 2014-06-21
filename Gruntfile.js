/* jshint node: true */
'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    jshint: {
      all: ['Gruntfile.js', 'js/*.js'],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    jscs: {
      all: {
        files: {
          src: [
            'Gruntfile.js',
            'js/utils.js', 'js/proto.js', 'js/supports.js', 'js/main.js'
          ]
        },
        options: {
          config: '.jscsrc'
        }
      },
      specs: {
        files: {
          src: 'js/specs.js'
        },
        options: {
          config: '.jscsrc',
          validateIndentation: null,
          maximumLineLength: null,
          requireMultipleVarDecl: null,
          disallowSpacesInsideArrayBrackets: null,
          disallowQuotedKeysInObjects: null,
          disallowSpaceBeforeBinaryOperators: null
        }
      },
      'inactive-specs': {
        files: {
          src: 'js/inactive-specs.js'
        },
        options: {
          config: '.jscsrc',
          requireMultipleVarDecl: null,
          disallowSpacesInsideArrayBrackets: null,
          disallowQuotedKeysInObjects: null,
          disallowSpaceBeforeBinaryOperators: null
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jscs-checker');

  grunt.registerTask('default', ['jshint', 'jscs']);
};
