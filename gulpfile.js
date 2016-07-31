//importamos gulp 
var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require('gulp-notify');
var browserSync = require('browser-sync').create();
var browserify = require('browserify');
var tap = require('gulp-tap');
var buffer = require('gulp-buffer');
var sourcemaps = require('gulp-sourcemaps');
var imagemin = require('gulp-imagemin');
var cssnano = require('cssnano');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');



var jsFiles = ["src/js/*.js", "src/js/**/*.js"];
var imgDir = [, "/images/*",];

gulp.task("default", ["compile-sass", "concat-js"], function(){
		browserSync.init({
		proxy: "127.0.0.1:8000",
		browser: "google chrome" //me abre por defecto el chrome

	});
	
	gulp.watch("src/scss/*.scss", ["compile-sass"]);

	gulp.watch("./*.html").on("change", browserSync.reload);
	
	gulp.watch(jsFiles, ["concat-js"]);	
});






//definimos la tarea compile-sass
gulp.task("compile-sass", function(){
	gulp.src("./src/scss/style.scss") // cargamos le archivo
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError)) // compilamos el archivo SASS
		.pipe(postcss([
			autoprefixer(), // autoprefija automáticamente el CSS
			cssnano() // minifica el CSS
		]))
		.pipe(sourcemaps.write('./')) // escribimos los sourcemaps
		.pipe(gulp.dest("./dist/css/")) // guardamos el archivo en dist/css
		.pipe(notify({
			title: "SASS",
			message: "Compiled 🤘"
		}))
		.pipe(browserSync.stream());
});

gulp.task("concat-js", function(){
	gulp.src("src/js/app.js")
	.pipe(tap(function(file){//tap nos permite ejecutar un codigo por cada fichero seleccionado en el paso anterior
		file.contents = browserify(file.path).bundle(); //pasamos el archivo por browserify para importar los require
	}))
	.pipe(buffer()) //convertir cada archivo en un stream
	.pipe(gulp.dest("dist/js/"))
	.pipe(notify({
		title: "JS",
		message: "concatenated"
	}))
	.pipe(browserSync.stream());


});

gulp.task("images-optimization", function(){
	gulp.src(imgDir)
		.pipe(imagemin())
		.pipe(gulp.dest('/images/min/'));
});
