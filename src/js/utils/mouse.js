import { isMobile } from './isMobile.js'


const mouse = document.querySelector('.mouse');
const mouse2 = document.querySelector('.mouse2');

document.addEventListener("mousemove", function (e) {
    if (!isMobile.any()) {
        mouse.style.left = mouse2.style.left = e.clientX + "px"
        mouse.style.top = mouse2.style.top = e.clientY + "px";
    }
});

function controlMouse() {
    if (isMobile.any()) {
        mouse.style.display = 'none';
        mouse2.style.display = 'none';
    }
    else {
        mouse.style.display = 'block';
        mouse2.style.display = 'block';
    }
}
controlMouse();

window.addEventListener("resize", function (e) {
    controlMouse();
});


function mouseColor(elem) {

    if (Array.from(elem).length) {
        Array.from(elem).forEach(item => {
            controlColor(item)
        })
    }
    else {
        controlColor(elem)
    }


    function controlColor(el) {
        el.addEventListener('mouseenter', function () {
            if (!isMobile.any()) {
                mouse.style.borderColor = '#000';
                mouse2.style.borderColor = '#000';
            }
        })
        el.addEventListener('mouseleave', function () {
            if (!isMobile.any()) {
                mouse.style.borderColor = '#fff';
                mouse2.style.borderColor = '#fff';
            }
        })
    }
}


const steps = document.querySelectorAll('.steps li');
const about = document.querySelector('.about');
const pricing = document.querySelector('.pricing');
const menu = document.querySelector('.menu');

mouseColor(steps);
mouseColor(about);
mouseColor(pricing);
mouseColor(menu);