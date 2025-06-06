//var vs let vs const
var a; //declare
var a=90; //define
var a=200; //re-define
a=300; //re-assign
console.log(a);
// let b; //declare
let b=500; //define
// let b=600; //re-define
b=900; //re-assign

console.log(b);
const c=90;
// const c= 60; //re-define
// c=500; //re-assign
console.log(c)

function checkScope(){
    if(true){
        var x='check scope';
    }
    console.log(x);
}
checkScope();

/*
    var - function scope -> result
    const - block scope -> ReferenceError
    let - block scope -> ReferenceError
*/
//hoisting
hello();
function hello(){
    const q='hoisting';
    console.log(q);
}

//rest parameter and spread parameter . both use (...)
//rest parameter
function checkRestParameter(...args){
    console.log(args);
}
checkRestParameter(5,6,7,3,4,2)
//spread parameter
const point_first = [9,8,4,3]; //array
let point_second = [7,4,5];//array
let total_points = [...point_first,...point_second];
console.log(total_points);