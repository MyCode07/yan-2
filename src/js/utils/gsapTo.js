import gsap from "gsap";

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
    document.querySelector('.home__email-horizontal')
]
    .concat([...document.querySelectorAll('.text-right-animate')])
    .concat([...document.querySelectorAll('.text-left-animate')])
    .concat([...document.querySelectorAll('.animate-delay')])
)

elems.forEach(el => {
    observer.observe(el)
})
