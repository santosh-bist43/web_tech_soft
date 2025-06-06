// Students 
// roll_no=2
// name = ram
// address = kathmandu
//key:value

// var student = {
//     roll_no:2,
//     name:"Ram",
//     address:"Kathmandu"
// }

// console.log(student);
// console.log(student.roll_no);
// for(std in student){
//     console.log(student[std]);
// }
// var object1 = {
//     roll_no:1,
//     name:"Hari",
//     address:"Kathmandu"
// }
// var object2 = {
//     roll_no:3,
//     name:"sita",
//     address:"Lalitpur"
// }
// var students_detail =[
//     {
//         roll_no:1,
//         name:"Hari",
//         address:"Kathmandu"
//     },{
//         roll_no:3,
//         name:"sita",
//         address:"Lalitpur"
//     }
// ]

// console.log(students_detail);
// console.log(students_detail[0].address);
// console.log(students_detail[1]);

//key:value
var propertyFirst = {
    propertyId:004,
    propertyName:"Beautiful House for Sale",
    propertyLocation:{
        province:"Bagmati",
        city:"Lalitpur"
    },
    propertyDetail:function(){
        return `${this.propertyName} is Listed for Sale.`
    }
}
console.log(propertyFirst);
console.log(propertyFirst.propertyDetail());
console.log(propertyFirst['propertyName'])

//object values 
//using Dot(.) ,objectName.keyName or using objectName['keyName']

var propertyKeys = Object.keys(propertyFirst);
console.log(propertyKeys);
var propertyValues = Object.values(propertyFirst);
console.log(propertyValues);
console.log(propertyFirst.propertyLocation['city'])
var person={
    firstName:"Ram",
    lastName:"Shrestha",
    address:"lalitpur",
    myDetail:function(){
        return `My name is ${this.firstName} ${this.lastName}.I am from ${this.address}`
    }
}
document.getElementById('detail').innerHTML = person.myDetail();