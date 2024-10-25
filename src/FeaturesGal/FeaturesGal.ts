import {
  // smallTresholdPx, // 660
  // mobileTresholdPx, // 960
  wideTresholdPx, // 1200
} from '../variables';

import './FeaturesGal.styles.scss';

export function initFeaturesGal() {
  const rootNode = document.querySelector('.uc-FeaturesGal');
  const carouselWrapper = rootNode.querySelector('.t508');
  carouselWrapper.classList.toggle('CarouselWrapper', true);
  /** Owl carousel node */
  const owlCarousel = carouselWrapper.querySelector('.t508__container');
  owlCarousel.classList.toggle('Carousel', true);
  owlCarousel.classList.toggle('owl-theme', true);
  owlCarousel.classList.toggle('owl-carousel', true);
  /** Do we need autoplay? */
  const doAutoplay = false;
  const owlOptions: OwlCarousel.Options = {
    // @see https://owlcarousel2.github.io/OwlCarousel2/docs/api-options.html
    loop: true,
    center: true,
    dots: true,
    nav: false,
    margin: 0,
    smartSpeed: 2000,
    // Responsiveness...
    items: 1,
    // responsive: {
    //   0: { items: 1 },
    //   480: { items: 2 },
    //   640: { items: 3 },
    //   [wideTresholdPx]: { items: 5 },
    // },
  };
  if (doAutoplay) {
    // Autoplay...
    // @see https://owlcarousel2.github.io/OwlCarousel2/demos/autoplay.html
    owlOptions.autoplay = doAutoplay;
    owlOptions.autoplayTimeout = 3000;
    owlOptions.autoplayHoverPause = true;
  }
  /** Owl carousel object */
  const owl = $(owlCarousel).owlCarousel(owlOptions);
  // Append arrows...
  const rightArrow = document.createElement('div');
  rightArrow.classList.add('CarouselRightArrow');
  rightArrow.id = 'right';
  carouselWrapper.append(rightArrow);
  const leftArrow = document.createElement('div');
  leftArrow.classList.add('CarouselLeftArrow');
  leftArrow.id = 'left';
  carouselWrapper.append(leftArrow);
  // Initialize arrows events...
  const getUnderlayingItem = (target: HTMLElement, activeItem: HTMLElement) => {
    const { id } = target;
    return (
      activeItem &&
      ((id === 'left' ? activeItem.previousSibling : activeItem.nextSibling) as HTMLElement)
    );
  };
  const arrowOut = (ev: MouseEvent) => {
    const target = ev.target as HTMLElement;
    // @ts-ignore: For internal use only
    const underItem = target.underItem as HTMLElement;
    if (underItem) {
      underItem.classList.toggle('under', false);
      // @ts-ignore: For internal use only
      target.underItem = undefined;
    }
    if (doAutoplay) {
      owl.trigger('play.owl.autoplay');
    }
  };
  const arrowOver = (ev: MouseEvent) => {
    const target = ev.target as HTMLElement;
    const activeItem = owlCarousel.querySelector('.owl-item.active') as HTMLElement;
    const underItem = getUnderlayingItem(target, activeItem);
    // @ts-ignore: For internal use only
    target.underItem = underItem;
    if (underItem) {
      underItem.classList.toggle('under', true);
    }
    if (doAutoplay) {
      owl.trigger('stop.owl.autoplay');
    }
  };
  leftArrow.addEventListener('mouseover', arrowOver);
  leftArrow.addEventListener('mouseout', arrowOut);
  rightArrow.addEventListener('mouseover', arrowOver);
  rightArrow.addEventListener('mouseout', arrowOut);
  leftArrow.addEventListener('click', () => owl.trigger('prev.owl.carousel'));
  rightArrow.addEventListener('click', () => owl.trigger('next.owl.carousel'));
}
