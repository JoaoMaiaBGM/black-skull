export function scrollLeftCategories() {
  const left = document.querySelector(".carouselCategories");
  left?.scrollBy(-186, 0);
}

export function scrollRightCategories() {
  const right = document.querySelector(".carouselCategories");
  right?.scrollBy(186, 0);
}

export function scrollLeftProducts() {
  const left = document.querySelector(".carouselProducts");
  left?.scrollBy(-287, 0);
}

export function scrollRightProducts() {
  const right = document.querySelector(".carouselProducts");
  right?.scrollBy(287, 0);
}

export function scrollLeftSales() {
  const left = document.querySelector(".carouselSales");
  left?.scrollBy(-287, 0);
}

export function scrollRightSales() {
  const right = document.querySelector(".carouselSales");
  right?.scrollBy(287, 0);
}
