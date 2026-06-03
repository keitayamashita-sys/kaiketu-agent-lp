$(window).on('load', function(){
  const swiper = new Swiper(".room-swiper", {
    loop: true,
    slidesPerView: 1.2,
    centeredSlides: true,
    spaceBetween: 5,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // 前後の矢印
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      901: {
        slidesPerView: 2.4,
        spaceBetween: 8,
      },
    },
  });

  const equipmentSwiper = new Swiper(".equipment-swiper", {
    loop: true,
    slidesPerView: 1.2,
    centeredSlides: true,
    spaceBetween: 5,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // 前後の矢印
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      901: {
        slidesPerView: 1.6,
        spaceBetween: 8,
      },
    },
  });
});