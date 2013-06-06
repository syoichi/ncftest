/* jshint node:true, globalstrict:true */
'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'js/proto.js',
        // 'js/specs.js',
        'js/supports.js',
        'js/main.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    }
  });

  // load tasks
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // alias
  grunt.registerTask('lint', 'jshint');
  grunt.registerTask('travis', 'jshint');
  grunt.registerTask('default', 'lint');
};
