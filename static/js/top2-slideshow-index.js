const bannerListOnTop2Slideshow = document.querySelector(".top-banner-slideshow__banners")
const Top2SlideshowBanners = bannerListOnTop2Slideshow.querySelectorAll('a')
console.log("top2", Top2SlideshowBanners)
console.log(Top2SlideshowBanners.clientWidth)
const prevBtn = document.querySelector('.top-banner-slideshow__buttons--moved .top-banner-slideshow__prev-btn')
const nextBtn = document.querySelector('.top-banner-slideshow__buttons--moved .top-banner-slideshow__next-btn')

let currentBannerIndexOnTop2Slideshow = 0;

function showBanner(bannerIndex, widthBannerPerSlide, widthGapPerSlide) {
    const widthSlideOnTop2Slideshow = bannerListOnTop2Slideshow.clientWidth;
    console.log(widthSlideOnTop2Slideshow)
    // if (widthSlideOnTop2Slideshow % 1 !=0 ) {
    //     console.log(widthSlideOnTop2Slideshow)
    //     widthSlideOnTop2Slideshow +=1;
    //     widthSlideOnTop2Slideshow = Math.floor(widthSlideOnTop2Slideshow)
    //     console.log("*****")
    //     console.log(widthSlideOnTop2Slideshow)
    // }
    const widthBannerOnTop2Slideshow = widthSlideOnTop2Slideshow*widthBannerPerSlide*bannerIndex;
    console.log(widthBannerOnTop2Slideshow/bannerIndex)
    const widthGapOnTop2Slideshow = widthSlideOnTop2Slideshow*widthGapPerSlide*bannerIndex;
    console.log(widthGapOnTop2Slideshow)
    bannerListOnTop2Slideshow.style.transform = `translateX(-${widthBannerOnTop2Slideshow+widthGapOnTop2Slideshow}px)`
}
// console.log(Top2SlideshowBanners.length);
// nextBtn.onclick = function () {
//     currentBannerIndexOnTop2Slideshow+=2;
//     if (currentBannerIndexOnTop2Slideshow <= Top2SlideshowBanners.length - 1 ) {
//         if (currentBannerIndexOnTop2Slideshow == Top2SlideshowBanners.length-1 && Top2SlideshowBanners.length % 2 != 0) {
//             currentBannerIndexOnTop2Slideshow-=1;
//         }
//     }
//     else {
//         currentBannerIndexOnTop2Slideshow = 0;
//     }
//     showBanner(currentBannerIndexOnTop2Slideshow)
// }


// prevBtn.onclick = function () {
//     currentBannerIndexOnTop2Slideshow-=2;
//     if (currentBannerIndexOnTop2Slideshow < -1 ) {
//         currentBannerIndexOnTop2Slideshow = Top2SlideshowBanners.length -2;
//     }
//     if (currentBannerIndexOnTop2Slideshow == -1 && Top2SlideshowBanners.length % 2 != 0){
//         currentBannerIndexOnTop2Slideshow+=1
//     }
//     showBanner(currentBannerIndexOnTop2Slideshow)
// }

setInterval(() => {
    if (window.innerWidth >= 992){
        currentBannerIndexOnTop2Slideshow+=2;
        if (currentBannerIndexOnTop2Slideshow <= Top2SlideshowBanners.length - 1 ) {
            if (currentBannerIndexOnTop2Slideshow == Top2SlideshowBanners.length-1 && Top2SlideshowBanners.length % 2 != 0) {
                currentBannerIndexOnTop2Slideshow-=1;
            }
        }
        else {
            currentBannerIndexOnTop2Slideshow = 0;
        }
        showBanner(currentBannerIndexOnTop2Slideshow, 0.495, 0.01)
    }

    if (window.innerWidth < 992 & window.innerWidth > 480){
        currentBannerIndexOnTop2Slideshow+=1;
        console.log(currentBannerIndexOnTop2Slideshow, "tablet")
        showBanner(currentBannerIndexOnTop2Slideshow, 1, 0)
    }

    if (window.innerWidth <= 480){
        currentBannerIndexOnTop2Slideshow+=1;
        console.log(currentBannerIndexOnTop2Slideshow, "mobile")
        showBanner(currentBannerIndexOnTop2Slideshow, 1, 0)
    }
}, 5000)

