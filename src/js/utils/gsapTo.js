import gsap from "gsap";
import { Power3 } from 'gsap';



gsap.to('.header-animate', {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0,
});


gsap.to('.home__email-horizontal', {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0,
});

gsap.to('.h2-animate', {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0,
});

let textDelay = document.querySelectorAll('.about-text-animate');

for (let i = 0; i < textDelay.length; i++) {
    const element = textDelay[i];
    let delayValue = element.getAttribute("data-delay");

    gsap.to(element, {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: delayValue,
        ease: Power3.out,
    });


}

let listDelay = document.querySelectorAll('.list-animate');

for (let i = 0; i < listDelay.length; i++) {
    const element = listDelay[i];
    let delayValue = element.getAttribute("data-delay");

    gsap.to(element, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: delayValue,
    });

}

gsap.to('.text-left-animate ', {
    opacity: 1,
    x: 0,
    duration: 1,
    delay: 0,
});

gsap.to('.text-right-animate ', {
    opacity: 1,
    x: 0,
    duration: 1,
    delay: 0,
});

// git remote add origin https://github.com/MyCode07/yan-2.git
// git branch - M main
// git push - u origin main





