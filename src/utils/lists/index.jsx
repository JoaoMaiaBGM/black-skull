export function scrollLeft() {
  const left = document.querySelector(".carouselCategories");
  left?.scrollBy(-186, 0);
}

export function scrollRight() {
  const right = document.querySelector(".carouselCategories");
  right?.scrollBy(186, 0);
}
