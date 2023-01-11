let navbar=document.querySelector('.header .navabar');
let menu_ic=document.querySelector('menu_icon');

menu_ic.onclick=() =>{
    menu_ic.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}