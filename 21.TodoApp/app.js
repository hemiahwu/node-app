// app.js 搭建服务器 并且 配置文件信息
var express = require("express");
var todoController = require("./controller/todoController");
var app = express();
// 配置ejs视图引擎
app.set("view engine","ejs");
// 配置服务器识别静态文件
app.use(express.static("./public"));
// 调用方法   传实参
todoController(app);


app.listen("3000");

