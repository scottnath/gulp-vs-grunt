var gulp      = require('gulp');
var plumber   = require('gulp-plumber');
var sass      = require('gulp-sass');
var compass = require('gulp-compass');
var notify = require('gulp-notify');
var webserver = require('gulp-webserver');
var opn       = require('opn');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var sourcePaths = {
  styles: ['app/scss/**/*.scss']
};

var distPaths = {
  styles: 'app/styles'
};

var server = {
  host: 'localhost',
  port: '8001'
}

gulp.task('compass', function() {
  gulp.src(sourcePaths.styles)
  .pipe(compass({
    config_file: './config.rb',
    css: 'app/styles',
    sass: 'app/scss'
  }))
  .pipe(gulp.dest(distPaths.styles)) // destination of sass files
  .pipe(reload({stream:true}))
  .pipe(notify('Compass run successfully')); // triggers browsersync to reload;
});

// gulp.task('sass', function () {
//   gulp.src( sourcePaths.styles )
//     .pipe(plumber())
//     .pipe(sass())
//     .pipe(gulp.dest( distPaths.styles )) // destination of sass files
//     .pipe(reload({stream:true})); // triggers browsersync to reload
// });

// gulp.task('webserver', function() {
//   gulp.src( 'app' )
//     .pipe(webserver({
//       host:             server.host,
//       port:             server.port,
//       livereload:       true,
//       directoryListing: false
//     }));
// });

gulp.task('serve', ['compass'], function () {
    browserSync.init(null, {
        server: {
            baseDir: 'app',
            directory: true
        },
        debugInfo: false,
        open: true,
        host: server.host
    }, function (err, bs) {
        //require('opn')(bs.options.url);
        console.log('Started connect web server on ' + bs.options.url);
    });
});

gulp.task('openbrowser', function() {
  opn( 'http://' + server.host + ':' + server.port );
});

gulp.task('watch', function(){
  gulp.watch(sourcePaths.styles, ['compass']);
});

gulp.task('build', ['compass']);

gulp.task('default', ['build', 'serve', 'watch', 'openbrowser']);