const scrollTreshold = 300;

export function initTopMenu() {
  const navHeaderNode = document.querySelector('.uc-NavHeader');
  if (!navHeaderNode) {
    return;
  }
  document.addEventListener('scroll', checkScroll);
  checkScroll();
  function checkScroll() {
    const yPos = window.scrollY;
    const isScrolled = yPos > scrollTreshold;
    const hasScrolledClass = navHeaderNode.classList.contains('scrolled');
    const toChange = isScrolled !== hasScrolledClass;
    if (toChange) {
      navHeaderNode.classList.toggle('scrolled', isScrolled);
    }
  }
}
