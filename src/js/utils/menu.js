let headerMenuBtn = document.querySelector('.header__menu');
let menuBody = document.querySelector('.menu');
let menuCloseBtn = document.querySelector('.menu__close-btn');

headerMenuBtn.addEventListener("click", () => {
    menuBody.classList.add("_menu-open");
})

menuCloseBtn.addEventListener("click", () => {
    menuCloseBtn.querySelector("svg").style.transform = "rotate(180deg)";
    menuBody.classList.remove("_menu-open")
})

// import { aboutPageOpen } from '../utils/intro.js';
// aboutPageOpen();

let headerMenuLink = document.querySelectorAll('.menu__top nav ul li');
for (let i = 0; i < headerMenuLink.length; i++) {
    const element = headerMenuLink[i];

    element.addEventListener('click', (e) => {

    })

}
