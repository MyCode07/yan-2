const burger = document.querySelector('.burger');

burger.addEventListener('click', function () {
    document.body.classList.toggle('_noscroll');
    document.querySelector('.menu').classList.toggle('_open');

    setTimeout(() => {
        burger.classList.toggle('_active');

        if (burger.classList.contains('_active')) {
            burger.textContent = 'закрыть';
        }
        else {
            burger.textContent = 'меню';
        }

    }, 250);
})

const homeTitleSpans = document.querySelectorAll('.menu__item');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.transform = `translate3d(0, 0, 0)`;
            entry.target.style.opacity = 1
        }
    })
})



export function menuItemAnimation() {
    if (homeTitleSpans.length) {
        setTimeout(() => {
            homeTitleSpans.forEach(item => {
                observer.observe(item)
            })
        }, 300);
    }
}