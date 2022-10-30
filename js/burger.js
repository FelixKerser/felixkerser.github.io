let burger = document.getElementById('burger');
let full = document.getElementById('full-screen-menu');
let ul = document.getElementById('burger-ul');

let li = document.getElementsByClassName('burger__li');

let x = document.getElementById('x');

let body = document.getElementsByTagName('body');

let openburger = function(){
    full.style.opacity="1";
    full.style.zIndex="50";
    x.style.display="block";
    burger.style.display="none";
    full.style.transform="scale(1, 1)";
    full.style.width="100vw";
    full.style.height="100vh";
    full.style.top="0%";
    full.style.borderRadius="0px";
    ul.style.opacity="1";

    for (let element of li){
        element.style.transition="1.3s ease .4s";
        element.style.paddingTop="50px";
    }

    window.scrollTo(0, 0);
    body[0].style.overflow="hidden";
}

let closeburger = function(){
    full.style.opacity="0";
    full.style.zIndex="-1";
    x.style.display="none";
    burger.style="block";
    full.style.transform="scale(.5, .5)";
    full.style.width="200vw";
    full.style.height="50vh";
    full.style.top="-25%";
    full.style.borderRadius="1000px";
    ul.style.opacity="0";

    for (let element of li){
        element.style.transition="1s";
        element.style.paddingTop="0";
    }

    body[0].style.overflow="scroll";
}

burger.onclick = openburger;
x.onclick = closeburger;