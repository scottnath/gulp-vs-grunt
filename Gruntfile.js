module.exports = function (grunt) {
  grunt.initConfig({
    watch: {
      files: "app/scss/**/*.scss",
      tasks: ['compass']
    },
    compass: {
      dist: {
        options: {
          sassDir: 'app/scss',
          cssDir: 'app/styles',
          outputStyle: 'compressed'
        }
      }
    },
    browserSync: {
      dev: {
        bsFiles: {
          src : 'app/styles/*.css'
        },
        options: {
          watchTask: true, // < VERY important
          server: {
          	baseDir: 'app/'
          }
        }
      }
    }
  });

  // load npm tasks
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  // define default task
  grunt.registerTask('default', ["browserSync", "watch"]);
};