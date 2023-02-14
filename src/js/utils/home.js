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



let mouse = document.querySelector('.advantages .mouse');
let mouseBlock = document.querySelector('.advantages');

mouseBlock.onmousemove = function (event) {
    mouse.style.cssText = "left: " + event.clientX + "px; top: " + event.clientY + "px;";
    mouse.style.display = 'block'
}


// let bodyRect = document.body.getBoundingClientRect();
// let elemRect = mouseBlock.getBoundingClientRect();
// let offset = elemRect.top - bodyRect.top;

// function mousemove(event) {

//     if (offset) {
//         mouse.style.display = 'block';
//         document.addEventListener("mousemove", function (e) {
//             mouse.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
//         });
//     }


// }
// mousemove()



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

