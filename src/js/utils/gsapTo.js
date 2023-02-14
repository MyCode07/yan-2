import gsap from "gsap";
import { Power3 } from 'gsap';


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            gsap.to(entry.target, {
                opacity: 1,
                y: 0,
                x: 0,
                duration: 1,
                delay: 0,
            });
            
        }
    })
})

const elems = Array.from([
    document.querySelector('.header-animate'),
    document.querySelector('.home__email-horizontal'),
]
    .concat([...document.querySelectorAll('.text-right-animate')])
    .concat([...document.querySelectorAll('.text-left-animate')])
)

elems.forEach(el => {
    observer.observe(el)
})



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
