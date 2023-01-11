
// let left=document.getElementsByClassName('bi bi-caret-left-square-fill')[0]
// let right=document.getElementsByClassName('bi bi-caret-right-square-fill')[0]
// let cards=document.getElementsByClassName('cards')[0];


// left.addEventListener('click', ()=>{
//     cards.scrollLeft-=140;
// })
    


// right.addEventListener('click', ()=>{
//     cards.scrollLeft+=140;
// })


const left=document.getElementsByClassName('bi bi-caret-left-square-fill')[0]
const right=document.getElementsByClassName('bi bi-caret-right-square-fill')[0]
let cards=document.getElementsByClassName('cards')[0]

function leftScroll(){
    cards.scrollLeft-=140;
}

function rightScroll(){
   cards.scrollLeft+=140;
}


poster=document.getElementById('poster')
title=document.getElementById('title')
price_cont=document.getElementById('price_cont')




function display(i){
    var j = i +1;
    poster.src=document.getElementsByTagName('img')[j].src;
    title.innerText=document.getElementsByTagName('h5')[i].innerText;
    price_cont.innerText=document.getElementsByTagName('h4')[i].innerText;
    
}


const points = [40, 100, 1, 5, 25, 10];

points.sort(function(a, b){
   
    return a - b
});

console.log(points)