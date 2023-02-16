import { observe } from "./gsapTo.js";
import { observeHeader } from "./header-animation.js";
import { TweenMax, Expo } from "gsap/gsap-core.js";

function loaded() {
    const loadingtitle = document.querySelector('.loading__screen-title');

    loadingtitle.querySelectorAll('i').forEach(i => {
        i.style.opacity = 1
        i.style.transform = 'translate3d(0,0,0)'
    })

    setTimeout(() => {
        TweenMax.to(".loading__screen-title i", 1, {
            x: 0,
            y: -100,
            z: 0,
            opacity: 0,
        })


        TweenMax.to(".loading__screen", 2.2, {
            delay: 2,
            top: "-100%",
            ease: Expo.easeInOut,
            onComplete: () => {
                setTimeout(() => {
                    observeAllAnimatedElements()
                }, 2);
            }
        })
    }, 3000);
}
loaded();

function observeAllAnimatedElements() {
    document.body.classList.remove('_noscroll')

    const h1 = document.querySelectorAll('h1 span');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const i = entry.target.querySelector('i');
                if (i) {
                    entry.target.style.height = 'auto';
                    i.style.transform = 'translate3d(0, 0, 0)';
                }
            }
        })
    })

    const homeTitleWords = document.querySelectorAll('.home__content h1 span');
    if (homeTitleWords.length) {
        homeTitleWords.forEach(word => {
            observer.observe(word)
        })
    }

    const advantagesTitleWords = document.querySelectorAll('.advantages__page-content h1 span');
    if (advantagesTitleWords.length) {
        advantagesTitleWords.forEach(word => {
            observer.observe(word)
        })
    }

    observe()
    observeHeader()
}