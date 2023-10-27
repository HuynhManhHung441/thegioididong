const seeMorePolicyInFooter = document.querySelector('.footer__contents .policy');
const sortDownIconPolicy = document.querySelector(".footer__contents .policy p");

sortDownIconPolicy.addEventListener('click', () => {
  seeMorePolicyInFooter.classList.toggle('active');
  sortDownIconPolicy.remove();
//   sortDownIconPolicy.setAttribute("display: none;")
});



// const otherInformationElement = document.querySelector('.other-information');
// const sortDownIconElement = document.querySelector(".other-information p");
// console.log(otherInformationElement)
// console.log(sortDownIconElement)
// sortDownIconElement.addEventListener('click', () => {
//   otherInformationElement.classList.toggle('active');
// });


const otherInformationElement = document.querySelector('.other-information');
const sortDownIconElement = document.querySelector(".other-information p");
console.log(otherInformationElement)
console.log(sortDownIconElement)
sortDownIconElement.addEventListener('click', () => {
  otherInformationElement.classList.toggle('active');
});
