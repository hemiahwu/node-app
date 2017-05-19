var bodyParser = require("body-parser");
var urlencode = bodyParser.urlencoded({extended: false});
// var item = [{name:"Dog"},{name:"East"},{name:"West"}];

// 引入模块
var mongoose = require("mongoose");
// 使用mongoose对象连接数据库
mongoose.connect("mongodb://todos:123456@ds143588.mlab.com:43588/tododb");

// 创建数据库字段模板(也就是声明存储内容是什么类型)
var todoSchema = new mongoose.Schema({
    name:String
});

// 创建一个数据模型对象
var Todo = mongoose.model("Todo",todoSchema);

// 使用数据模型对象向数据库中存储数据
// Todo({name:"Dog"}).save(function (err) {
//     if (err) throw err;
//
//     console.log("存储成功!");
// });


// 处理逻辑(增删改查)
module.exports = function (xcApp) {
    xcApp.get("/todo",function (req,res) {
        // 使用数据模型对象查询数据库中所有的内容
        Todo.findan
        Todo.find({},function (err,data) {
            if (err) throw err;
            // 将从数据库中查询到的内容,返回给客户端
            res.render("index",{xcItem:data});
        })
    });
    xcApp.post("/todo",urlencode,function (req,res) {
        Todo(req.body).save(function (err,data) {
            if (err) throw err;
            res.json(data);
        });
        // console.log(req);
        // item.push(req.body);
    });
    xcApp.delete("/todo/:xcItem",function (req,res) {
        Todo.find({name:req.params.xcItem}).remove(function (err,data) {
            if (err) throw err;
            res.json(data);
        });

        // item = item.filter(function (todo) {
        //     var data = todo.name !== req.params.xcItem;
        //     return data;
        // });
        // res.json(item);
    });
}