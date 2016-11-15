var gulp = require('gulp');
var slim = require("gulp-slim");
var sass = require("gulp-sass");

gulp.task('default', function() {
});

gulp.task('hello', function() {
  console.log('Hello Zell');
});

gulp.task('slim', function(){
  gulp.src("./app/views/*.slim")
    .pipe(slim({
      // rails: true,
      pretty: true,
    }))
    .pipe(gulp.dest("./dist/"));
});


var
    source = 'app/assets/stylesheets/',
    dest = 'dist/';
    
var bootstrapSass = {
        in: './node_modules/bootstrap-sass/'
    };

var fonts = {
        in: [source + 'fonts/*.*', bootstrapSass.in + 'assets/fonts/**/*'],
        out: dest + 'fonts/'
    };

var scss = {
    in: source + 'main.scss',
    out: dest + 'css/',
    watch: source + '**/*',
    sassOpts: {
        outputStyle: 'nested',
        precison: 3,
        errLogToConsole: true,
        includePaths: [bootstrapSass.in + 'assets/stylesheets']
    }
};

gulp.task('fonts', function () {
    return gulp
        .src(fonts.in)
        .pipe(gulp.dest(fonts.out));
});

gulp.task('sass', ['fonts'], function () {
    return gulp.src(scss.in)
        .pipe(sass(scss.sassOpts))
        .pipe(gulp.dest(scss.out));
});

gulp.task('watch', ['sass', 'slim'], function(){
  gulp.watch('app/views/*.slim', ['slim']);
  gulp.watch(scss.watch, ['sass']);
});

