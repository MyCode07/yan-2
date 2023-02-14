import { Swiper, Navigation, Pagination, EffectCoverflow } from "swiper";

const slides = document.querySelectorAll('.works .swiper-slide');
if (slides.length) {
    new Swiper('.works .swiper', {
        modules: [
            Navigation, Pagination, EffectCoverflow
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
        }
    })
}