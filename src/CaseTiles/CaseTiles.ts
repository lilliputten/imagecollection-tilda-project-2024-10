import './CaseTiles.styles.scss';

export function initCaseTiles() {
  const rootNode = document.querySelector('.uc-CaseTiles');
  if (!rootNode) {
    return;
  }
  const images = rootNode.querySelectorAll('.t-bgimg');
  images.forEach((imgNode) => {
    const parentNode = imgNode; // .parentNode;
    const title = imgNode.getAttribute('aria-label');
    const node = document.createElement('div');
    node.classList.add('Title');
    node.innerText = title;
    parentNode.append(node);
  });
}
