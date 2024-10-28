import { isDev } from './isDev';

export const defaultCarouselOptions: OwlCarousel.Options = {
  // @see https://owlcarousel2.github.io/OwlCarousel2/docs/api-options.html
  loop: true,
  center: false,
  dots: true,
  nav: false,
  smartSpeed: 500,
  // margin: 40,
  // // Responsiveness...
  // items: 1,
};

export const defaultCarouselAutoplay = !isDev;
export const defaultCarouselAutoplayTimeout = 3000;
