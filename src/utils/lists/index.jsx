export function scrollLeft() {
  const left = document.querySelector(".carouselCategories");
  left?.scrollBy(-700, 0);
}

export function scrollRight() {
  const right = document.querySelector(".carouselCategories");
  right?.scrollBy(700, 0);
}
