console.log("Function Examples...");

//3 types
//1.general function
//2.anonymous function
//3.arrow function

function Sum(a,b){
    console.log(`The sum is ${a+b}`);
}
Sum(500,400);
Sum('a','b');

var Addition = function(a,b){
    console.log(`The sum is ${a+b}`);
    console.log(a);
}
Addition(3,4);

var difference = (a,b)=>{
    console.log(`Difference :${a-b}`);
}
difference(50,40);

function withDefaultValue(x=80,y=10){
    var mul = x*y;
    console.log(`The product is :${mul}`);
}
withDefaultValue(40);
withDefaultValue('a');

//return functions
function returnMultiplication(p,q){
    return p*q;
}
var returnedValue = returnMultiplication(5,4);
console.log("The returned product is:",returnedValue*2);
console.log("It's okay.");