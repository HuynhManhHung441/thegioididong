const priceRangeAccordionElement = document.querySelector('.price-range-accordion');
const priceRangeTextElement = document.querySelector(".price-range-accordion p");
console.log(priceRangeAccordionElement)
console.log(priceRangeTextElement)
priceRangeTextElement.addEventListener('click', () => {
  priceRangeAccordionElement.classList.toggle('active');
});