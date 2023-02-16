import { Swiper, Pagination, EffectCoverflow } from "swiper";
import { isMobile } from './isMobile.js'

const slides = document.querySelectorAll('.works .swiper-slide');
if (slides.length) {
    new Swiper('.works .swiper', {
        modules: [
            Pagination, EffectCoverflow
        ],
        loop: true,
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        initialSlide: 1,
        slidesPerView: 'auto',

        coverflowEffect: {
            rotate: 60,
            stretch: 0,
            depth: 300,
            modifier: 1,
            scale: 1,
            slideShadows: false,
        },

        pagination: {
            el: '.works__slider-pagination',
            clickable: true
        }
    })

    if (isMobile.any()) {
        document.querySelector('.works__slider-pagination').classList.add('_visible');
    }
}