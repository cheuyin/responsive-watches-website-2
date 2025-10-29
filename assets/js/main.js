/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

navToggle?.addEventListener("click", () => {
  navMenu.classList.add("show-menu");
});

navClose?.addEventListener("click", () => {
  navMenu.classList.remove("show-menu");
});

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== SWIPER WATCHES ===============*/
const swiperWatches = new Swiper(".home__swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  spaceBetween: 32,
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      translate: [-100, 0, -500],
      rotate: [0, 0, 15],
      opacity: 0,
    },
    next: {
      translate: [100, 0, -500],
      rotate: [0, 0, -15],
      opacity: 0,
    },
  },
});

/*=============== GSAP ANIMATION ===============*/
gsap.from(".home__images", 1.5, {opacity: 0, y: 150, delay: 0.1})
gsap.from(".home__data", 1.8, {opacity: 0, x: -100, delay: 0.8})
gsap.from(".home__info", 1.8, {opacity: 0, x: -100, delay: 1})