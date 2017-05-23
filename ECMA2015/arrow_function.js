"use strict"; // 严格模式

// 求圆的面积
function circleArea(r) {
    var PI = 3.14;
    return PI * r * r;
}

// 箭头函数实现求圆的面积
let circleArea2 = (r,m)=>{
    const PI = 3.14;
    return PI * r * m;
}

// 箭头函数的优化 条件是只有一个参数时,才可以这么写
let circleArea3 = r => 3.14 * r * r;

console.log(circleArea(7));
console.log(circleArea2(7,7));
console.log(circleArea3(7));

