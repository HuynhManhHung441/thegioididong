
const otherInformationElement = document.querySelector('.other-information');
const sortDownIconElement = document.querySelector(".other-information p");
console.log(otherInformationElement)
console.log(sortDownIconElement)
sortDownIconElement.addEventListener('click', () => {
  otherInformationElement.classList.toggle('active');
});
