module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    compass: {
      dist: {
        options: {
          sassDir: 'sass',
          cssDir: 'css',
          environment: 'production',
          outputStyle: 'compressed'
        }
      },
      dev: {
        options: {
          sassDir: 'sass',
          cssDir: 'css'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  // Default task(s).
  grunt.registerTask('default', ['compass:dev']);

};
