// gulpfile.js是运行任务的入口,名字必须是这个
var gulp = require("gulp");
var imagemin = require("gulp-imagemin");
var uglify = require("gulp-uglify");
var sass = require("gulp-sass");
var concat = require("gulp-concat");
/*
	常用的方法
	gulp.task  -- 定义任务
	gulp.src   -- 找到任务的源数据
	gulp.dest  -- 将执行的任务存储到其他的位置
	gulp.watch -- 观察任务的变化
 */

// 定义任务
/*
	sbqMessage: 任务的名称
	callback  : 执行具体的任务
*/ 
gulp.task("sbqMessage",function() {
	return console.log("Gulp is running...");
});


// 拷贝文件
gulp.task("copyHtml",function(){
	// 先找到文件
	gulp.src("src/*.html")
	// 指定文件拷贝的目的路径
		.pipe(gulp.dest("dist"));
});

// 压缩图片
gulp.task("imageMin",function(){
	gulp.src("src/images/*")
		.pipe(imagemin())
		.pipe(gulp.dest("dist/images"));
});

// 压缩代码
gulp.task("sbqUglify",function(){
	gulp.src("src/js/*.js")
		.pipe(uglify())
		.pipe(gulp.dest("dist/js"));
});

// sass转css
gulp.task("sbqSass",function(){
	gulp.src("src/sass/*.scss")
		.pipe(sass().on("error",sass.logError))
		.pipe(gulp.dest("dist/css"));
});

// 代码合并
gulp.task("sbqConcat",function(){
	gulp.src("src/js/*.js")
		.pipe(concat("main.js"))
		.pipe(uglify())
		.pipe(gulp.dest("dist/js"));
})

// 监听代码
gulp.task("sbqWatch",function(){
	gulp.watch("src/js/*.js",["sbqConcat"]);
	gulp.watch("src/images/*",["imageMin"]);
	gulp.watch("src/sass/*.scss",["sbqSass"]);
	gulp.watch("src/*.html",["copyHtml"]);
});


// 定义默认执行多个任务
gulp.task("default",["copyHtml","imageMin","sbqSass","sbqConcat"]);