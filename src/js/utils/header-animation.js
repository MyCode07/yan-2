
import gsap from "gsap";

let header = document.querySelector('.header-animate')
gsap.to(header, {
    opacity: 1,
    y: 0,
    x: 0,
    duration: 1,
    delay: 3,
});


let homePage = document.querySelector('.page');
let advantagesPage = document.querySelector('.advantages-page');
let aboutPage = document.querySelector('.intro');

if (homePage || advantagesPage || aboutPage) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delayValue = entry.target.getAttribute("data-delay");
                gsap.to(entry.target, {
                    opacity: 1,
                    y: 0,
                    x: 0,
                    duration: 1,
                    delay: delayValue ? delayValue : 0,
                });
            }
        })
    })


    const elems = Array.from([
        document.querySelector('.header-animate'),
    ]
        .concat([...document.querySelectorAll('.text-right-animate')])
        .concat([...document.querySelectorAll('.text-left-animate')])
        .concat([...document.querySelectorAll('.animate-delay')])
    )

    elems.forEach(el => {
        observer.observe(el)
    })
}