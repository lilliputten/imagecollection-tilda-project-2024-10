import {
  defaultCarouselOptions,
  defaultCarouselAutoplayTimeout,
  defaultCarouselAutoplay,
} from '../core/constants/defaultCarouselOptions';

import './FeaturesGal.styles.scss';

export function initFeaturesGal() {
  const rootNode = document.querySelector('.uc-FeaturesGal');
  if (!rootNode) {
    return;
  }
  const carouselWrapper = rootNode.querySelector('.t508');
  carouselWrapper.classList.toggle('CarouselWrapper', true);
  /** Owl carousel node */
  const owlCarousel = carouselWrapper.querySelector('.t508__container');
  owlCarousel.classList.toggle('Carousel', true);
  owlCarousel.classList.toggle('owl-theme', true);
  owlCarousel.classList.toggle('owl-carousel', true);
  /** Do we need autoplay? */
  const doAutoplay = defaultCarouselAutoplay;
  const owlOptions: OwlCarousel.Options = {
    // @see https://owlcarousel2.github.io/OwlCarousel2/docs/api-options.html
    ...defaultCarouselOptions,
    margin: 0,
    // Responsiveness...
    items: 1,
  };
  if (doAutoplay) {
    // Autoplay...
    // @see https://owlcarousel2.github.io/OwlCarousel2/demos/autoplay.html
    owlOptions.autoplay = true;
    owlOptions.autoplayHoverPause = true;
    owlOptions.autoplayTimeout = defaultCarouselAutoplayTimeout;
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
      // TODO: Update 'under' node after manual switch back or forward
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
  // Update image sizes (make them 1:1 ratio)...
  const owlDot = owlCarousel.querySelector('.owl-dots');
  const updateCarouselGeometry = () => {
    const isDisabled = owlDot.classList.contains('disabled');
    const arrowDisabled = leftArrow.classList.contains('disabled');
    if (isDisabled !== arrowDisabled) {
      leftArrow.classList.toggle('disabled', isDisabled);
      rightArrow.classList.toggle('disabled', isDisabled);
    }
  };
  // @see https://owlcarousel2.github.io/OwlCarousel2/docs/api-events.html
  owl.on('resized.owl.carousel', updateCarouselGeometry);
  updateCarouselGeometry();
}
