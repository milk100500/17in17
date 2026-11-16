/* VARIABLES (START) */

const swiperButtons = document.querySelectorAll(".examples__button");
const swiperBox = document.querySelector(".examples__swiper__box");
const swiperImage = document.querySelector(".examples__swiper__image");
const header = document.querySelector(".header");

let lastScroll = 0;

/* VARIABLES (END) */

/* LISTENERS (START) */

swiperButtons.forEach((elem) => {
  elem.addEventListener("click", () => {
    if (elem.getAttribute("data-pointer") === "left") {
      swiperBox.scrollLeft += -swiperImage.offsetWidth;
    } else {
      swiperBox.scrollLeft += swiperImage.offsetWidth;
    }
  });
});

window.addEventListener("scroll", () => {
  const currentScroll =
    window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll < 50) {
    header.classList.remove("header--hidden");
    lastScroll = currentScroll;
    return;
  }

  if (currentScroll > lastScroll) {
    header.classList.add("header--hidden");
  } else {
    header.classList.remove("header--hidden");
  }

  lastScroll = currentScroll;
});

/* LISTENERS (START) */
