// 定义一个类
class Person{
    // 构造函数
    constructor(name,age,weight){
        // 属性
        this.name = name;
        this.age = age;
        this.weight = weight;
    }
    // 方法
    displayWeight(){
        console.log(this.weight);
    }
}

// 创建对象
let bucky = new Person("Bucky",28,80);
let lightMoon = new Person("mingyue",18,45);

// bucky.displayWeight();
// lightMoon.displayWeight();

// 继承
class Programmer extends Person{
    constructor(name,age,weight,language){
        super(name,age,weight);
        this.language = language;
    }

    displayLanguage(){
        console.log(this.language);
    }
}

let doubleQuite = new Programmer("ninger",18,42.5,"Javascript");
// doubleQuite.displayWeight();

doubleQuite.displayLanguage();

