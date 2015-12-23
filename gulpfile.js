var gulp = require('gulp'); // node's require method looks for gulp in node modules (cant look for global)
var uglify = require('gulp-uglify'); //loaded the gulp plugin through node's require // npm install gulp-uglify --save-dev <<<----flag to go to package.json
var livereload = require('gulp-livereload');
var minifyCSS = require('gulp-minify-css');
var prefix = require('gulp-autoprefixer');
//var sass = require('gulp-sass'); //unused and unloaded yet.gulp


//handles errors
function handleErrors(error){
  console.error(error);
  this.emit('end'); //gulp method
}

gulp.task('styles:reload', function(){

  return gulp.src('app/app.css')
    .pipe(livereload({auto:false}));

})

//modifies styles
gulp.task('styles', function () {   //go to command line and type gulp styles

  console.log('starting styles!');
  return gulp.src('app/app.css')  // path to file to be uglified
    .pipe(prefix('last 2 versions'))
    .pipe(minifyCSS()) // the task (plugin)
    .on('error', handleErrors)
    .pipe(gulp.dest('app/build/css'));
})


//modifies scripts

gulp.task('scripts', function () {

  console.log('starting scripts');
  return gulp.src('app/**/**/*.js')  // path to file to be uglified
    .pipe(uglify()) // the task (plugin)
    .on('error', handleErrors)
    .pipe(gulp.dest('app/build/js/'));  //where the build will be sent to

});

//runs all gulp tasks 

gulp.task('default', function () {  //runs the seperate tasks all together if you just type gulp in command line

  gulp.start('styles', 'scripts')

})


//--------------------------------------GULP WATCH -------------------------------------
// watches files

gulp.task('watch', function () {

  livereload.listen();
  gulp.watch('app/routes/Macros/Macros.js', ['scripts'])
    .on('change', livereload.changed);
  //insert file path to be watched & go to command line --> gulp watch
  gulp.watch('app/routes/Macros/Macros.html')
    .on('change', livereload.changed);

  gulp.watch('app/app.css', ['styles', 'styles:reload'])
    //.on('change', livereload.changed); ---removed for race conditions


});