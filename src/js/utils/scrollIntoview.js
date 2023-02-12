let audioScroll = new Audio("../../files/audio/5.mp3");
const burger = document.querySelector('.burger');
document.addEventListener('click', function (e) {
    let targetEl = e.target;
    if (targetEl.dataset.id) {
        e.preventDefault();

        audioScroll.play();
        audioScroll.playbackRate += 1;

        const id = targetEl.dataset.id;
        const section = document.querySelector(`section#${id}`);

        if (window.innerWidth <= 768) {
            document.body.classList.remove('_noscroll')
            document.querySelector('.menu').classList.remove('_open')
            document.querySelector('.burger').classList.remove('_active')
            burger.textContent = 'меню';
        }


        section.scrollIntoView(
            {
                block: "start",
                behavior: "smooth",
            }
        );
    }
})