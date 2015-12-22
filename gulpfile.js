var gulp = require('gulp'); // node's require method looks for gulp in node modules (cant look for global)
var uglify = require('gulp-uglify');
//modifies styles
gulp.task('styles', function(){   //go to command line and type gulp styles
    
    console.log('starting styles!');
    
    
})


//modifies scripts

gulp.task('scripts', function(){
    
    console.log('starting scripts');
    gulp.src('')  //file to be uglified
      .pipe(uglify()) // the task (plugin)
      .pipe(gulp.dest('file'))  //where the build will be sent to
    
    
})

//runs all gulp tasks 

gulp.task('default', function(){  //runs the seperate tasks all together if you just type gulp in command line
    
    gulp.start('styles', 'scripts')
    
})