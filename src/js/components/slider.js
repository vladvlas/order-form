const slider = document.querySelector('.slider-main')
const sliderNav = document.querySelector('.slider-nav')

// const swiper = new Swiper(slider, {
//     // Optional parameters
//     direction: 'vertical',
//     loop: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   });

let mySwiperNav = new Swiper (sliderNav, {
    slidesPerView: 3,
    spaceBetween: 15,
    freeMode: true,
    loop: false,
    direction: 'vertical',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

let mySwiper = new Swiper(slider, {
    spaceBetween: 10,
    thumbs: {
        swiper: mySwiperNav,
    },
    effect: 'fade',
    effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
})
