var exec = require('child_process').exec;

var gulp = require('gulp');
var watch = require('gulp-watch');

var through = require('through2');


function createPost() {
  return through.obj(function (file, enc, cb) {
    exec('_ ' + file.path, function (err, stdout, stderr) {
      if (stderr) {
        return console.error(stderr);
      }
      console.log(stdout);
    });
  });
}


gulp.task('default', function () {
  gulp.src('*-*-*-*.md')
    .pipe(watch({emit: 'all'}, function (files) {
      files.pipe(createPost());
    }));
});
