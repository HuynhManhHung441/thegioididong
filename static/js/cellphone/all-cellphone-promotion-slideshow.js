// function Slideshow(options) {
//     const container = options.container;
//     const containerSelector = document.querySelector('.' + container);
//     console.log(containerSelector);
//     const PrevBtnSelector = containerSelector.querySelector('#promotion-slideshow__prev-btn')
//     const bannerListSelector = containerSelector.querySelector('.promotion-slideshow__banner-list') 
//     console.log(PrevBtnSelector);
//     console.log(bannerListSelector);
//     function handleSlideshow() {
//         console.log("handle slideshow")
//         // bannerListSelector.style.dispay = "none";
//     }
//     function initEvent() {
//         console.log("clicked onto btn")
//         PrevBtnSelector.addEventListener("click", handleSlideshow);
//     }
//     initEvent();
// }



// let instancePromotionSlideshow = new Slideshow(
//     {container: 'promotion__slideshow'}
// );


const bannerListOfPromotionSlideshow = document.querySelector(".promotion__slideshow .promotion-slideshow__banner-list")
const promotionSlideshowBanners = bannerListOfPromotionSlideshow.querySelectorAll('a')
console.log("Number banners:",promotionSlideshowBanners)

const prevBtnOnTopPromotionSlideshow = document.querySelector('.promotion__slideshow .promotion-slideshow__buttons #promotion-slideshow__prev-btn')
const nextBtnOnTopPromotionSlideshow = document.querySelector('.promotion__slideshow .promotion-slideshow__buttons #promotion-slideshow__next-btn')
let currentBannerIndexOnTopPromotionSlideshow = 0;

function showBannerOnTopPromotionSlideshow(bannerIndex, widthBannerPerSlide, widthGapPerSlide) {
    const widthSlideOnTopPromotionSlideshow = bannerListOfPromotionSlideshow.clientWidth;
    const widthBannerOnTopPromotionSlideshow = widthSlideOnTopPromotionSlideshow*widthBannerPerSlide*bannerIndex;
    const widthGapOnTopPromotionSlideshow = widthSlideOnTopPromotionSlideshow*widthGapPerSlide*bannerIndex;
    bannerListOfPromotionSlideshow.style.transform = `translateX(-${widthBannerOnTopPromotionSlideshow+widthGapOnTopPromotionSlideshow}px)`;
}

nextBtnOnTopPromotionSlideshow.onclick = function () {
    currentBannerIndexOnTopPromotionSlideshow+=1;
    if (currentBannerIndexOnTopPromotionSlideshow === promotionSlideshowBanners.length) {
        currentBannerIndexOnTopPromotionSlideshow = 0;
    }
    console.log("Clicked success")
    showBannerOnTopPromotionSlideshow(currentBannerIndexOnTopPromotionSlideshow, 1, 0)
}

prevBtnOnTopPromotionSlideshow.onclick = function () {
    currentBannerIndexOnTopPromotionSlideshow-=1;
    if (currentBannerIndexOnTopPromotionSlideshow < 0) {
        currentBannerIndexOnTopPromotionSlideshow = promotionSlideshowBanners.length -1;
    }
    console.log("Clicked success")
    showBannerOnTopPromotionSlideshow(currentBannerIndexOnTopPromotionSlideshow, 1, 0)
}