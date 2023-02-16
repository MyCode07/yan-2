
// loading__screen-title animation  
var textWrapper = document.querySelector('.loading__screen-title');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: false }).add({
    targets: '.loading__screen-title  .letter',
    translateY: [40, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: function (el, i) {
        return 300 + 30 * i;
    }
}).add({
    targets: '.loading__screen-title .letter ',
    translateY: [0, -40],
    opacity: [1, 0],
    easing: "easeInExpo",
    duration: 1200,
    delay: function (el, i) {
        return 100 + 30 * i;
    }
});

// reveling other elements
TweenMax.to(".loading__screen", 2.2, {
    delay: 3.8,
    top: "-100%",
    ease: Expo.easeInOut
});



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

if (document.querySelector('._noscroll')) {
    observer.observe(document.querySelector('.home__content h1'))
}
if (document.querySelector('.advantages__page')) {
    observer.observe(document.querySelector('.advantages__page-content h1'))
}

const h2 = document.querySelectorAll('h2 span');
const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            for (let i = 0; i < h2.length; i++) {
                if (h2[i].querySelector('i')) {
                    h2[i].style.height = 'auto';
                    h2[i].querySelector('i').style.transform = 'translate3d(0, 0, 0)';
                }
            }
        }
        observer.unobserve(entry.target)
    })

})

const header = document.querySelector('.header__logo svg');
const headerMenuText = document.querySelector('.header__menu label');
const headerMenuSpan = document.querySelectorAll('.header__menu-line span');
const sections = document.querySelectorAll('[data-background');

function colorHeader() {
    if (sections.length) {
        for (let i = 0; i < sections.length; i++) {
            const item = sections[i];
            let top = item.getBoundingClientRect().top;
            if (top <= header.getBoundingClientRect().height) {

                header.style.fill = item.dataset.background ? item.dataset.background : 'white';
                headerMenuText.style.color = item.dataset.background ? item.dataset.background : 'white';

                for (let i = 0; i < headerMenuSpan.length; i++) {
                    const element = headerMenuSpan[i];
                    element.style.background = item.dataset.background ? item.dataset.background : 'white';
                }
            }
        }
    }
}

colorHeader()
window.addEventListener('scroll', colorHeader);
