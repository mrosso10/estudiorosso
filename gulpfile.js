var gulp = require('gulp');
var slim = require("gulp-slim");

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('hello', function() {
  console.log('Hello Zell');
});

gulp.task('slim', function(){
  gulp.src("./app/views/*.slim")
    .pipe(slim({
      pretty: true
    }))
    .pipe(gulp.dest("./dist/"));
});

gulp.task('watch', function(){
  gulp.watch('app/views/*.slim', ['slim']);
});
