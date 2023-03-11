import anime from "animejs";
import gsap from "gsap";

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            aboutImageShow();
        }
    })
})

const textWrapper = document.querySelectorAll('.person__block-name');
if (textWrapper) {
    for (let i = 0; i < textWrapper.length; i++) {
        const element = textWrapper[i];
        element.innerHTML = element.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
        anime.timeline({ loop: false }).add({
            targets: '.person__block-name  .letter',
            translateX: 40,
            translateZ: 0,
            opacity: 0,
            easing: "easeOutExpo",
        });
    }
}


function aboutImageShow() {

    anime.timeline({ loop: false }).add({
        targets: '.person__block-name  .letter',
        translateX: 0,
        translateZ: 0,
        opacity: 1,
        easing: "easeOutExpo",
        duration: 1000,
        delay: function (el, i) {
            return 80 * i;
        }
    });


    gsap.to('.sub-name', {
        y: 0,
        z: 0,
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 2
    })

    gsap.to('.bar', {
        width: 140,
        duration: 1,
        delay: 2
    })

    gsap.to('.person__block-media li', {
        y: 0,
        z: 0,
        x: 0,
        duration: 1,
        delay: 2.5
    })

    gsap.to('.person__block-img', {
        scale: 1,
        opacity: 1,
        duration: 2.5,

    })




    gsap.to('.content__top-logo', {
        x: 0,
        duration: 2,
        opacity: 1,
        delay: 1
    })

    gsap.to('.content__top-year', {
        x: 0,
        duration: 2,
        opacity: 1,
        delay: 1
    })




}

export function observeImages() {
    document.querySelectorAll('.about-us').forEach(item => {
        observer.observe(item)
    })
}

let line = document.querySelector('.line');
gsap.to(line, {
    x: 0,
    duration: 2,
    opacity: 1,
    delay: 8
})