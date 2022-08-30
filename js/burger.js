let burger = document.getElementById('burger');
let full = document.getElementById('full-screen-menu');

let openburger = function(){
    full.style.opacity="1";
    full.style.zIndex="50";
}

burger.onclick = openburger;