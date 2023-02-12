import gsap from "gsap";

const footerFlex = document.querySelector('.footer__flex');
footerFlex.style.opacity = 0;
footerFlex.style.transform = `translate3d(0, 10%, 0)`;

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            gsap.to('.footer__flex', {
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: 0.2,
            });
            observer.unobserve(entry.target)
        }
    })
})

export function observeFooter() {
    observer.observe(footerFlex);
}