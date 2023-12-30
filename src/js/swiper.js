import Swiper from 'swiper';
import { Navigation} from 'swiper/modules';

export const swiper = new Swiper('.carousel__swiper', {
    modules: [Navigation],
    loop: true,
    slidesPerView: "auto",

    navigation: {
        nextEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            allowTouchMove: true,
            centeredSlides: true,
        },
        576: {
            centeredSlides: false,
        },
        992: {
            allowTouchMove: false,
        },
    }

});