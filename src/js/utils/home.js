const h1 = document.querySelectorAll('h1 span');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            for (let i = 0; i < h1.length; i++) {
                h1[i].style.height = 'auto';
                h1[i].querySelector('i').style.transform = 'translate3d(0, 0, 0)';
            }
        }
        observer.unobserve(entry.target)
    })
})
observer.observe(document.querySelector('.home__content h1'))




const header = document.querySelector('.header');
const sections = document.querySelectorAll('[data-background');

function colorHeader() {
    if (sections.length) {
        for (let i = 0; i < sections.length; i++) {
            const item = sections[i];
            let top = item.getBoundingClientRect().top;
            if (top <= header.getBoundingClientRect().height) {
                header.style.backgroundColor = item.dataset.background ? item.dataset.background : 'white';
            }

            if (window.scrollY <= header.getBoundingClientRect().height) {
                header.style.backgroundColor = 'transparent';
            }
        }
    }
}

colorHeader()
window.addEventListener('scroll', colorHeader);