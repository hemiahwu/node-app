require("../css/style.css");
let $ = require("jquery");
let people = require("./people.js");	

$.each(people,function(key,value){
	$("body").append("<h1>Name: " + people[key].name + "</h1>");
});

/*
1. npm run build - 用于构建你的项目,就是将对应的文件模块化
2. npm start - 用于运行webpack-dev-server服务器,找到入口文件及出口文件
 */
