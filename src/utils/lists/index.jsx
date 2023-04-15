export function scrollLeft() {
  const left = document.querySelector(".carouselCategories");
  left?.scrollBy(-200, 0);
}

export function scrollRight() {
  const right = document.querySelector(".carouselCategories");
  right?.scrollBy(200, 0);
}
