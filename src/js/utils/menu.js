import { TweenLite } from "gsap/gsap-core.js";
import { isMobile } from "./isMobile.js";

let headerMenuBtn = document.querySelector('.header__menu');
let menuBody = document.querySelector('.menu');
let menuCloseBtn = document.querySelector('.menu__close-btn');

headerMenuBtn.addEventListener("click", () => {
    menuBody.classList.add("_menu-open");
    document.body.classList.add('_noscroll')

    if (!isMobile.any()) {
        menuBody.style.paddingRight = '10px';
    }

})

menuCloseBtn.addEventListener("click", () => {
    menuCloseBtn.querySelector("svg").style.transform = "rotate(180deg)";
    menuBody.classList.remove("_menu-open")
    document.body.classList.remove('_noscroll')
    menuBody.style.paddingRight = '0';
})


let headerMenuLink = document.querySelectorAll('.menu__top nav ul li a');
for (let i = 0; i < headerMenuLink.length; i++) {
    const element = headerMenuLink[i];

    element.addEventListener('click', (e) => {
        menuBody.classList.remove("_menu-open")
        document.body.classList.remove('_noscroll')
        menuBody.style.paddingRight = '0';
    })
}

const privacy = document.querySelector('#privacy');
const privacyContent = document.querySelector('.popup__privacy');
const privacyContentBody = document.querySelector('.popup__privacy-body');
const privacyClose = document.querySelector('.popup__privacy-close');


if (privacy) {
    privacy.addEventListener("click", (e) => {
        e.preventDefault();

        privacyContent.classList.add("_privacy-open")
        document.body.classList.add('_noscroll')

        if (!isMobile.any()) {
            privacyContentBody.style.paddingRight = '10px';

        }
    })

    privacyClose.addEventListener("click", (e) => {
        privacyContent.classList.remove("_privacy-open")
        document.body.classList.remove('_noscroll')
        privacyContentBody.style.paddingRight = '0';
    })

}

document.addEventListener("DOMContentLoaded", function (event) {
    var cursor = document.querySelector(".custom-cursor");
    var links = document.querySelectorAll(".cursor-links");
    var initCursor = false;

    window.addEventListener('resize', () => {
        if (isMobile.any()) {
            cursor.style.display = "none"
        }
        else {
            cursor.style.display = "block"
        }
    })

    if (isMobile.any()) {
        cursor.style.display = "none"
    }

    for (var i = 0; i < links.length; i++) {
        var selfLink = links[i];

        selfLink.addEventListener("mouseover", function () {
            cursor.classList.add("custom-cursor--link");
        });
        selfLink.addEventListener("mouseout", function () {
            cursor.classList.remove("custom-cursor--link");
        });
    }

    window.onmousemove = function (e) {
        var mouseX = e.clientX;
        var mouseY = e.clientY;

        if (!initCursor) {
            // cursor.style.opacity = 1;
            TweenLite.to(cursor, 0.3, {
                opacity: 1
            });
            initCursor = true;
        }

        TweenLite.to(cursor, 0, {
            top: mouseY + "px",
            left: mouseX + "px"
        });
    };

    window.onmouseout = function (e) {
        TweenLite.to(cursor, 0.3, {
            opacity: 0
        });
        initCursor = false;
    };
});
