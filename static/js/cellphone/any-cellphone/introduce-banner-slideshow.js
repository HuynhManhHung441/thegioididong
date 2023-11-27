const introduceSlideshow = document.querySelector(".introduce-slideshow")
const slidePrevBtn = introduceSlideshow.querySelector("#introduce-slideshow__prev-btn")
const slideNextBtn = introduceSlideshow.querySelector("#introduce-slideshow__next-btn")
const bannerList = introduceSlideshow.querySelector(".introduce-slideshow__banner-list")
const bannerImgs = bannerList.querySelectorAll("img")

let currentBannerIndex = 0;

slidePrevBtn.onclick = function() {
    currentBannerIndex -= 1;
    if (currentBannerIndex < 0){
        currentBannerIndex === 0;
    }
    bannerList.style.transform = `translateX(-${introduceSlideshow.clientWidth*currentBannerIndex}px)`;
}

slideNextBtn.onclick = function() {
    currentBannerIndex += 1;
    if (currentBannerIndex === bannerImgs.length){
        currentBannerIndex = bannerImgs.length - 1;
    }
    bannerList.style.transform = `translateX(-${introduceSlideshow.clientWidth*currentBannerIndex}px)`;
}

setInterval (() => {
    if (window.innerWidth >= 992) {
        currentBannerIndex += 1;
        if (currentBannerIndex === bannerImgs.length){
            currentBannerIndex = 0;
        }
        bannerList.style.transform = `translateX(-${introduceSlideshow.clientWidth*currentBannerIndex}px)`;
    }

}, 4000)