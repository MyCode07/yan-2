const mouseBlock = document.querySelector('section.advantages');
if (mouseBlock) {
    const mouse = mouseBlock.querySelector('section.advantages .mouse');

    mouseBlock.addEventListener('mousemove', function (e) {
        mouse.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
        mouse.style.display = 'flex';
    })
}
