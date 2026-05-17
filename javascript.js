console.log("hello world");

//1. closure
//  it is an function where it remembers and access its variables from its outer scope
//  even after outer function  execution was finshed

// function outer(){
//     let count=0;

//     return function inner(){
//         count++;
//         console.log(count);
//     }

// }

// function nagasai(){
//     let cnt=0;

//     return function balam(){
//         cnt= cnt+2;
//         console.log(cnt);
//     }
// }

// let res1 = nagasai();
// res1();
// res1();


// const res=outer();
// res();
// res();
// res();

//operators
// console.log('operator')
// console.log(2**3);

//truty and falsy values in js
// falsy values :0, " ", NaN, null, undefined

// let num=null;
// if(num ==1 ){
//     console.log("happy")
// }else {
//     console.log("not happy")
// }

// let s="sai";
// let n = 6;
// console.log(s * n);

//switch case

// const n=6;
// switch(n){
//     case 0:
//         console.log("yes");
//     case 5:
//         console.log("found");
//         break;
//     default: console.log("error");
// }

//ternary operator
// const n1=5;
// n1 > 2 ? console.log("found yes"):console.log("fu..k");

//functions in js

//1.function declaration
function naga(){
    console.log("he is hero");
}
//2. function expression
const hero = function(){
    console.log("function expression");
}

//3.arrow function
const exp= ()=>{
    console.log("it is arrow function");
}

//4. immediately invoked function
(function (){
    console.log("it is iife");
})();

//5.callback function
function mainfun(name,callback){
    console.log(name);
    callback();
}
function done(){
    console.log("callback function");
}
mainfun("nagasai",done);

//6.higher order function a function which returns another fucntion is called higher order function
function greet(a,b,fun){
    return fun(a,b);
}
function fun(a,b){
    return a + b;
}
let ans=greet(2,3,fun);
console.log(ans);