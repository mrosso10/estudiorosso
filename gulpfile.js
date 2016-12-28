var gulp = require('gulp');
var slm = require("gulp-slm");
var sass = require("gulp-sass");

gulp.task('default', ['sass', 'slm', 'php', 'img', 'js'], function() {
});

gulp.task('slm', function(){
  gulp.src("./app/views/*.slm")
    .pipe(slm())
    .pipe(gulp.dest("./dist/"));
});

gulp.task('php', function(){
  gulp.src("./app/controllers/*.php")
    .pipe(gulp.dest("./dist/"));
});
gulp.task('img', function(){
  gulp.src("./app/assets/images/**/*")
    .pipe(gulp.dest("./dist/images"));
});

gulp.task('js', function(){
  gulp.src("./app/assets/javascripts/**/*")
    .pipe(gulp.dest("./dist/javascripts"));
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

gulp.task('watch', ['sass', 'slm', 'php', 'img', 'js'], function(){
  gulp.watch('app/assets/javascripts/**/*.js', ['js']);
  gulp.watch('app/views/*.slm', ['slm']);
  gulp.watch('app/controllers/*.php', ['php']);
  gulp.watch(scss.watch, ['sass']);
});


// var jquery = require('gulp-jquery');
// gulp.task('jquery', function () {
//     return jquery.src({
//         release: 2, //jQuery 2 
//         flags: ['-deprecated', '-event/alias', '-ajax/script', '-ajax/jsonp', '-exports/global']
//     })
//     .pipe(gulp.dest('./dist/vendor/'));
//     // creates ./public/vendor/jquery.custom.js 
// });