// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
let sliders = document.querySelectorAll('.swiper');
if (sliders) {
    for (let index = 0; index < sliders.length; index++) {
        let slider = sliders[index];
        if (!slider.classList.contains('swiper-bild')) {
            let slider_items = slider.children;
            if (slider_items) {
                for (let index = 0; index < slider_items.length; index++) {
                    let el = slider_items[index];
                    el.classList.add('swiper-slide');
                }
            }
            let slider_content = slider.innerHTML;
            let slider_wrapper = document.createElement('div');
            slider_wrapper.classList.add('swiper-wrapper');
            slider_wrapper.innerHTML = slider_content;
            slider.innerHTML = '';
            slider.appendChild(slider_wrapper);
            slider.classList.add('swiper-bild');

            if (slider.classList.contains('_swiper_scroll')) {
                let sliderScroll = document.createElement('div');
                sliderScroll.classList.add('swiper-scrollbar');
                slider.appendChild(sliderScroll);
            }
        }
        if (slider.classList.contains('_gallery')) {
            //slider.data('lightGallery').destroy(true);
        }
    }
    sliders_bild_callback();
}

function sliders_bild_callback(params) { }

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
        const sliderScrollItem = sliderScrollItems[index];
        const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
        const sliderScroll = new Swiper(sliderScrollItem, {
            observer: true,
            observeParents: true,
            direction: 'vertical',
            slidesPerView: 'auto',
            freeMode: true,
            scrollbar: {
                el: sliderScrollBar,
                draggable: true,
                snapOnRelease: false
            },
            mousewheel: {
                releaseOnEdges: true,
            },
        });
        sliderScroll.scrollbar.updateSize();
    }
}


//========================================================================================================================================================




if (document.querySelector('.products-slides__body')) {//существует ли такой слайдер
    new Swiper('.products-slides__body', {

        slidesPerView: 2,
        observer: true,
        observeParents: true,
        spaceBetween: 34,
        watchOverflow: true,
        speed: 800,
        loop: true,
        loopAdditionalSlides: 5,
        preloadImages: false,
        // Arrows
        navigation: {
           nextEl: '.slider-arrow_next',
            prevEl: '.slider-arrow_prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
              
               
            },
            768: {
                slidesPerView: 1,
                
            },
            992: {
                slidesPerView: 2,
                
            },

        },

    });
}
if (document.querySelector('.slider-recipes__body')) {//существует ли такой слайдер
    new Swiper('.slider-recipes__body', {

        slidesPerView: 1,
        observer: true,
        observeParents: true,
        spaceBetween: 0,
        watchOverflow: true,
        autoHeight: true,
        speed: 800,
        loop: true,
       //loopAdditionalSlides: 5,
        preloadImages: false,
        // Arrows
        navigation: {
           nextEl: '.slider-arrow_prevv',
            // prevEl: '.slider-arrow_prevv',
        },
        // control-slide__arrow_next
        // breakpoints: {
        //     320: {
        //         slidesPerView: 1,
              
               
        //     },
        //     768: {
        //         slidesPerView: 1,
                
        //     },
        //     992: {
        //         slidesPerView: 2,
                
        //     },

        // },

    });
}


