// //for each
// let nums=[1,2,3,4,4];

// nums.forEach((num,index)=>{
    
//     console.log(index+ ":"+num*2)
    
// })
// console.info("sai")
// console.warn("hello")
// console.count("hello + naga")
// console.table(nums)

//map 
var birthyear=[2000,2003,2006,2008];
var ages=birthyear.map((ele,ind)=>{
   let ags = 2026-ele;
   return ags; 
})
console.table(birthyear);
console.table(ages);


//reduce  it is also used on the arrays and return only single value
let arr=[1,2,3,4,5];
//sum of all the number from the above array

let res=arr.reduce((acc,curr)=>{
    return acc+ curr
},0)
console.log(res);   
