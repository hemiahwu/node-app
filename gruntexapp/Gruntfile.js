module.exports = function(grunt) {
	// grunt.registerTask("default",'',function(){
	// 	grunt.log.write("grunt is running...");
	// });

	grunt.initConfig({
		// 查看所安装的插件
		pkg:grunt.file.readJSON("package.json"),
		cssmin:{
			// 合并
			combine:{
				// 文件路径
				files: {
					"dist/css/main.css":["app/css/style1.css","app/css/style2.css"]
				}
			}
		},
		uglify:{
			dist:{
				files:{
					"dist/js/main.min.js":["app/js/main.js"]
				}
			}
		}
	});

	// 加载插件
	grunt.loadNpmTasks("grunt-contrib-cssmin");
	grunt.loadNpmTasks("grunt-contrib-uglify");

	// 注册任务
	grunt.registerTask("default",["cssmin","uglify"]);
}

