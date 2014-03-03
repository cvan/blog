/*global module:false*/
module.exports = function(grunt) {
  var serverOptions = {
    base: 'src',
    debug: !!(process.env.DEBUG || process.env.DEBUG),
    hostname: '0.0.0.0',
    open: !!(process.env.OPEN || process.env.open),
    port: process.env.PORT || process.env.port || 9000
  };

  grunt.initConfig({
    connect: {
      server: {
        options: serverOptions,
      },
      development: {
        options: serverOptions
      }
    },
    cssmin: {
      minify: {
        expand: true,
        cwd: 'src/',
        src: ['style.css'],
        dest: './',
        ext: '.min.css'
      }
    },
    processhtml: {
      dist: {
        files: {
          'index.html': ['src/index.html']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-processhtml');

  grunt.registerTask('server', ['connect:development']);
  grunt.registerTask('default', ['server']);
  grunt.registerTask('minify', ['cssmin', 'processhtml']);
};
