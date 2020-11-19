'use strict';

const moveTo = new MoveTo({
  tolerance: 80,
});
const menuTrigger = document.getElementById('menu-trigger');
const menuNav = document.getElementById('menu-nav');
const triggers = document.querySelectorAll('.js-trigger');

menuTrigger.addEventListener('click', function () {
  menuNav.classList.toggle('opened');
});

triggers.forEach(function (trigger) {
  moveTo.registerTrigger(trigger);
});

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: false,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 48,
      loop: true,
    },
  },
});
