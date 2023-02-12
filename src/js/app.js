// import './utils/splitText.js';
// import './utils/footer.js';
// import './utils/scrollIntoview.js';
// import './utils/smoothscroll.js';
// import './utils/menu.js';
// import './utils/to-top.js';
// import './utils/form.js';
// import './utils/inputmask.js';
import './utils/gsapTo.js';


let sendBtn = document.querySelector('.btn-flip');

if (sendBtn) {
    sendBtn.addEventListener('click', () => {
        console.log('aaaaaa');
        sendBtn.classList.toggle("_send-ok");
    })
}


let headerMenuBtn = document.querySelector('.header__menu');
let menuBody = document.querySelector('.menu');
let menuCloseBtn = document.querySelector('.menu__close-btn');

headerMenuBtn.addEventListener("click", () => {
    menuBody.classList.add("_menu-open");
})

menuCloseBtn.addEventListener("click", () => {

    let aa = menuCloseBtn.querySelector("svg").style.transform = "rotate(180deg)";
    setTimeout(() => menuBody.classList.remove("_menu-open"), 1000);
})



