var points = [3,4,5,2,6,8];
console.log(points)

//loops in js
//1. for loops (for...in , for...of , forEach())
//2.while loop
//3. do..while loop
console.log("using for loop:")
for(var i=0;i<points.length;i++){
    console.log(points[i]);
}
console.log("using for...of loop:");
for(var point of points){
    console.log(point)
}

console.log("using do...while loop:");
var i=0;
do{
    console.log(points[i]);
    i++;
}while(i<points.length);

console.log("using while loop:");

var j=0;
while(j<points.length){
    console.log(points[j]);
    j++;
}

console.log("using forEach function...");
points.forEach(function(point){
    console.log(point*2);
})