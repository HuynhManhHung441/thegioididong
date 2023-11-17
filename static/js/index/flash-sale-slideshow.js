const flashSaleSlideshow = document.querySelector(".flash-sale__slideshow")

const flashSaleSlideshowPrevBtn = document.querySelector(".flash-sale__slide-buttons #flash-sale__prev-btn")
const flashSaleSlideshowNextBtn = document.querySelector(".flash-sale__slide-buttons #flash-sale__next-btn")

const widthSlide = document.querySelector(".flash-sale__slideshow--visible")
const cardList = document.querySelector(".flash-sale__card-list")
console.log("number of cards:", cardList.childElementCount)
const productCard = document.querySelector(".flash-sale__card")
console.log("width cardList", cardList.clientWidth)
console.log("width card", productCard.clientWidth)
console.log(0.16*widthSlide.clientWidth*6 + 0.008*widthSlide.clientWidth*5)
const numberOfRowsInSlide = 2;
const numberOfCardsInSlide = 12;
const numberOfSlides = Math.floor(cardList.childElementCount/numberOfCardsInSlide) + 1;
console.log("numberOfSlides", numberOfSlides)



let nowSlideIndex = 0;

flashSaleSlideshowPrevBtn.addEventListener("click", movePrevFlashSaleSlide);

function movePrevFlashSaleSlide() {
    nowSlideIndex -= 1;
    if (nowSlideIndex < 0) {
        nowSlideIndex = 0;
    }
    if (nowSlideIndex >= 0) {
        console.log("nowSlideIndex", nowSlideIndex)
        cardList.style.transform = `translateX(-${(widthSlide.clientWidth + 0.008*widthSlide.clientWidth)*nowSlideIndex}px)`;
        console.log("movePrevSlide was worked")
    }
}

flashSaleSlideshowNextBtn.addEventListener("click", moveNextFlashSaleSlide);

function moveNextFlashSaleSlide() {
    nowSlideIndex += 1;
    if (nowSlideIndex === numberOfSlides) {
        nowSlideIndex = numberOfSlides - 1;
        console.log("nowSlideIndex:", nowSlideIndex)
    }

    if (nowSlideIndex < numberOfSlides) {
        cardList.style.transform = `translateX(-${(widthSlide.clientWidth + 0.008*widthSlide.clientWidth)*nowSlideIndex}px)`;
        console.log("moveNextSlide was worked")
    }
}

