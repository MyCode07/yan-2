import Swiper from 'swiper/bundle';
import Parallax from 'parallax-js';
import gsap from "gsap";

let mouse = document.querySelector('.mouse');
let mouse2 = document.querySelector('.mouse2');
document.addEventListener("mousemove", function (e) {
    mouse.style.cssText = mouse2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});


document.addEventListener('click', (e) => {
    let burger = document.querySelector('.header__burger');
    if (e.target === burger) {
        burger.classList.toggle('_active');
        document.querySelector('.header__toolbar-nav').classList.toggle('_active');
    } else {
        burger.classList.remove('_active');
        document.querySelector('.header__toolbar-nav').classList.remove('_active');
    }
});


var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

const myText = new SplitType('#my-text');

gsap.to('.char', {
    y: 0,
    stagger: 0.05,
    delay: 0.1,
    duration: 0.1,
    opacity: 1,

})
gsap.to('#top', {
    y: 0,
    opacity: 1,
    duration: 0.5,
})
gsap.to('#socialmedia', {
    x: 0,
    opacity: 1,
    duration: 0.5,
    visibility: 'visible',
})
gsap.to('#main-text-animate', {
    x: 0,
    opacity: 1,
    duration: 0.5,
    visibility: 'visible',
})
gsap.to('#main-talk-animate', {
    y: 0,
    duration: 0.5,
})





