
function colorHeader() {
    const header = document.querySelector('.header__logo svg');
    const headerMenuText = document.querySelector('.header__menu label');
    const headerMenuSpan = document.querySelectorAll('.header__menu-line span');
    const sections = document.querySelectorAll('[data-background');

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
