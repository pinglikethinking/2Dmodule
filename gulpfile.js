var gulp = require('gulp');
var htmlmin=require('gulp-htmlmin'),
	minifycss=require('gulp-minify-css'),
	uglify=require('gulp-uglify'),
	concat=require('gulp-concat'),
	rename=require('gulp-rename'),
	notify=require('gulp-notify');

//min html
gulp.task('html',function(){
	return gulp.src('./*.html')
		.pipe(htmlmin({cllapseWhitespace:true}))
		.pipe(gulp.dest('./'))
		.pipe(notify({message:'html task ok'}));
});
//concat,min,rename css
gulp.task('css',function(){
	return gulp.src('style/*.css')
		.pipe(concat('main.css'))
		.pipe(gulp.dest('style'))
		.pipe(rename({suffix:'.min'}))
		.pipe(minifycss())
		.pipe(gulp.dest('style'))
		.pipe(notify({message:'css task ok'}));
});
//concat,min js file
gulp.task('js',function(){
	return gulp.src('js/*.js')
		.pipe(concat('all.js'))
		.pipe(gulp.dest('js'))
		.pipe(rename({suffix:'.min'}))
		.pipe(uglify())
		.pipe(gulp.dest('js'))
		.pipe(notify({message:'js task ok'}));
});
//default task
gulp.task('default',function(){
	gulp.run('css','js','html');
	//watch html change
	gulp.watch('./*.html',function(){
    	gulp.run('html');
    });
	//watch css
	gulp.watch('style/*.css',['css']);
	//watch js
	gulp.watch('js/*js',['js']);
});