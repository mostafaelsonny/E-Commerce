// siper sidebar //

var swiper1 = new Swiper(".slide-swp", {
    pagination: {
        el: ".swiper-pagination1",
        dynamicBullets : true,
        clickable : true
    },
    autoplay : {
        delay : 2000,
    },
    loop : true,
});

var swiper2 = new Swiper(".sale-slide", {

    slidesPerView : 5,
    spaceBetween : 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay : {
        delay : 3000,
    },
    loop : true,
    breakpoints : {
        1600:{
            slidesPerView : 5,
        },
        1200:{
            slidesPerView : 4,
        },
        800:{
            slidesPerView : 3,
        },
        0:{
            slidesPerView : 2 ,
        },
    },
});


var swiper3 = new Swiper(".mySwiper-2", {

    slidesPerView : 5,
    spaceBetween : 27,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay : {
        delay : 3000,
    },
    loop : true,
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 3,
    },
    1600: {
      slidesPerView: 4,
    },
  },
});

var swiper4 = new Swiper(".all_items", {

    slidesPerView : 3,
    spaceBetween : 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay : {
        delay : 3000,
    },
    loop : true,
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 3,
    },
    1600: {
      slidesPerView: 4,
    },
  },
});


