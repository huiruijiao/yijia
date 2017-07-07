var gulp = require('gulp');


gulp.task("copy-index",function(){
	gulp.src("index.html")
	.pipe(gulp.dest("d:/phpStudy/WWW"));
});

gulp.task("copy-css",function(){
	gulp.src("css/*.css")
	.pipe(gulp.dest("D:/phpStudy/WWW/css/"))
})
gulp.task("images",function(){
	gulp.src("images/*.{jpg,png,gif,bmp}")
	.pipe(gulp.dest("D:/phpStudy/WWW/images/"))
})
gulp.task("js",function(){
	gulp.src("js/*.js")
	.pipe(gulp.dest("D:/phpStudy/WWW/js/"))
})

gulp.task("php",function(){
	gulp.src("*.php")
	.pipe(gulp.dest("D:/phpStudy/WWW/"))
})

gulp.task("watchAll",function(){
	gulp.watch("*.html",["copy-html"]);
	gulp.watch("css/*.css",["copy-css"]);
	gulp.watch("scss/*.scss",["sass"]);
	gulp.watch("js/*.js",["js"]);
	gulp.watch("*.php",["php"]);
})


gulp.task("sass",function(){
	gulp.src("scss/*.scss")
	.pipe(sass())
	.pipe(gulp.dest("D:/phpStudy/WWW/css/"))
})
