import { gsap, TweenMax } from "gsap";
import { isMobile } from './isMobile.js'

let observer = null;
if (!isMobile.any()) {
    const splitText = (elem) => {
        elem.innerHTML = elem.textContent.replace(/(\S*)/g, letter => {
            return `<span class="word">
            ${letter.replace(/(-|#|@)?\S(-|#|@)?/g, "<i style='opacity:0;' class='letter'>$&</i>")}   
        </span>`;
        });
        return elem;
    };

    document.querySelectorAll('[data-split]').forEach(item => {
        splitText(item);
        item.style.opacity = 0;
    });

    function random(min, max) {
        return (Math.random() * (max - min)) + min;
    }

    function buildText(elem) {
        const array = Array.from(elem.querySelectorAll('.letter'))

        array.forEach((item, index) => {
            item.style.opacity = 1;
            item.style.transition = `opacity 2.5s ease ${index * 0.01}s`;
            TweenMax.from(item, 2.5, {
                scale: .1,
                x: random(-500, 500),
                y: random(-500, 500),

                delay: index * 0.01,
                repeat: 0,
            })
        });
    }

    observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                buildText(entry.target)

                document.querySelectorAll('[data-split]').forEach(item => {
                    item.style.opacity = 1;
                });
                observer.unobserve(entry.target)
            }
        })
    })


}

export function observeAbout() {
    if (!isMobile.any()) {
        document.querySelectorAll('[data-split]').forEach(item => {
            observer.observe(item)
        });
    }
    else {
        document.querySelector('.about').classList.add('_mb');
    }
}