//for display property
const p01 = document.getElementById("p01");
console.log(p01);

let btnNone = document.getElementById("btnNone");
let btnBlock = document.getElementById("btnBlock");

btnNone.addEventListener('click',function(){
    p01.style.display = "none";
})

btnBlock.addEventListener('click',handleBlock);
function handleBlock(){
    p01.style.display="block";
}
//for visibility property
const p02 = document.getElementById("p02");
console.log(p02);

let btnHide = document.getElementById('btnHide');
let btnVisible = document.getElementById('btnVisible');

btnHide.addEventListener('click',()=>{
    p02.style.visibility="hidden";
})

btnVisible.addEventListener('click',()=>{
    p02.style.visibility ="visible";
})
