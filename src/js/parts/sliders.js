import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const sliders = document.querySelectorAll('.swiper');
if (sliders.length) {
    sliders.forEach(slider => {
        const section = slider.closest('[data-tab-content]');
        let prev = section.querySelector('.prev')
        let next = section.querySelector('.next')


        if (slider.closest('.cases')) {
            new Swiper(slider, {
                modules: [Navigation],
                navigation: {
                    prevEl: prev,
                    nextEl: next,
                },
                slidesPerView: 1,
                spaceBetween: 10,
            })
        }
    })
}
