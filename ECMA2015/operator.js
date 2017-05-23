"use strict";

function addNumbers(a,b,c) {
    console.log(a + b + c);
}

var nums = [3,4,5,6];
// addNumbers(nums[0],nums[1],nums[2]);
addNumbers(...nums);

var meat = ["bacon","ham"];
var food = ["apple",meat[0],meat[1],"kiwi","rice"];
var food = ["apple",...meat,"kiwi","rice"];
console.log(food);