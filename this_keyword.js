//this key word is an object in javscript

let users={
    name:"naga",
    age:23,
    city:"hyd",
    greet:function(){
        console.log(this.city);
    }
}
users.greet();

//call, apply->parameters as array ,bind->return function method

var salary=500;
function fun(a,ab){
    console.log(this.salary);
    console.log(a,ab);
}
fun();
let employee={
    salary:1000
}
fun.call(employee,1,1)
fun.apply(employee,[1,1])
let x=fun.bind(employee,1,1);
console.log(x());