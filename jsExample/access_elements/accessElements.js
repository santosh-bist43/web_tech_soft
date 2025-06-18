//using id
// function addition(){
//     console.log("Addition Button clicked...");
//     let first_number = document.getElementById('first_number').value;
//     console.log(first_number);

//     let second_number = document.getElementById('second_number').value;
//     console.log(second_number);

//     let sum = Number(first_number) + Number(second_number);
//     console.log(sum);

//     let result =document.getElementById('result');
//     result.innerHTML = `The sum of two numbers is ${sum}.`;
// }

//using TagName
// function addition(){
//     let inputTag = document.getElementsByTagName('input');
//     console.log(inputTag);

//     let first_number = inputTag[0].value;

//     let second_number = inputTag[1].value;

//     let sum = Number(first_number) + Number(second_number);

//     let result = document.getElementById('result');
//     result.innerHTML = `Sum of Two numbers is ${sum}.`;
// }

//using Class Name
// function addition(){
//     let usingClass = document.getElementsByClassName('num');
//     console.log(usingClass);

//     let first_number = usingClass[0].value;
//     console.log(first_number);

//     let second_number = usingClass[1].value;
//     console.log(second_number);

//     let sum = Number(first_number) + Number(second_number);
//     console.log(sum);

//     document.getElementById('result').innerHTML = `The sum is ${sum}.`;
// }

//using css selector (querySelectorAll)

function addition(){
    let usingSelector = document.querySelectorAll('.num');
    console.log(usingSelector[1]);
}