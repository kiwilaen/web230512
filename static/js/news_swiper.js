const newsSwiper = new Swiper('#news_swiper', {
  direction: 'horizontal',
  loop: true,
  observer: true,
  observeParents: true,
  autoplay: {
    delay: 6000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination1',
    clickable: true
  },
})