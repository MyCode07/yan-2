export function fibonachii() {
    observer.observe(document.querySelector('.fibonacci__spiral'));
}

const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
        entries[0].target.classList.add('_active');
    }
})