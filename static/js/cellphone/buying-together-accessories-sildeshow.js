const buyingTogetherAccessoriesSlideshow = document.querySelector(".buying-together-accessories__sildeshow")
const buyingTogetherAccessoriesList = document.querySelector(".buying-together-accessories__list")

const slideButtons = document.querySelector(".slide-buttons")
const nextBtn = document.querySelector(".slide-buttons .slide-buttons__next-btn")
const prevBtn = document.querySelector(".slide-buttons .slide-buttons__prev-btn")
function moveNextSlide() {
    nextBtn.style.display = "none";
    slideButtons.style.justifyContent = "start";
    prevBtn.style.display = "block";
    buyingTogetherAccessoriesList.style.transform = `translateX(-${buyingTogetherAccessoriesSlideshow.clientWidth}px)`;
}

function movePrevSlide() {
    prevBtn.style.display = "none";
    slideButtons.style.justifyContent = "end";
    nextBtn.style.display = "block";
    buyingTogetherAccessoriesList.style.transform = `translateX(${0}px)`;
}




