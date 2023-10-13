const bannerList1 = document.querySelector(".top-header__slide .slideshow__banner-list")
const banners1 = bannerList1.querySelectorAll('.banner--on-desktop a')
// console.log(banners1.clientWidth)
// const prevBtn = document.querySelector('.top-banner-slideshow__buttons--moved .top-banner-slideshow__prev-btn')
// const nextBtn = document.querySelector('.top-banner-slideshow__buttons--moved .top-banner-slideshow__next-btn')
let currentBannerIndexOnTop1Slideshow = 0;

function showBanner(bannerIndex, widthBannerPerSlide, widthGapPerSlide) {
    const widthSlide = bannerList1.clientWidth;
    const widthBanner = widthSlide*widthBannerPerSlide*bannerIndex;
    const widthGap = widthSlide*widthGapPerSlide*bannerIndex;
    bannerList1.style.transform = `translateX(-${widthBanner+widthGap}px)`
}
// console.log(banners1.length);
// nextBtn.onclick = function () {
//     currentBannerIndex+=2;
//     if (currentBannerIndex <= banners.length - 1 ) {
//         if (currentBannerIndex == banners.length-1 && banners.length % 2 != 0) {
//             currentBannerIndex-=1;
//         }
//     }
//     else {
//         currentBannerIndex = 0;
//     }
//     showBanner(currentBannerIndex)
// }


// prevBtn.onclick = function () {
//     currentBannerIndex-=2;
//     if (currentBannerIndex < -1 ) {
//         currentBannerIndex = banners.length -2;
//     }
//     if (currentBannerIndex == -1 && banners.length % 2 != 0){
//         currentBannerIndex+=1
//     }
//     showBanner(currentBannerIndex)
// }

setInterval(() => {
    if (window.innerWidth >= 992){
        currentBannerIndexOnTop1Slideshow+=1;
        if (currentBannerIndexOnTop1Slideshow===banners1.length){
            currentBannerIndexOnTop1Slideshow = 0
        }
        showBanner(currentBannerIndexOnTop1Slideshow, 1, 0)
    }

    if (window.innerWidth < 992 & window.innerWidth > 480){
        currentBannerIndexOnTop1Slideshow+=1;
        if (currentBannerIndexOnTop1Slideshow===banners1.length){
            currentBannerIndexOnTop1Slideshow = 0
        }
        showBanner(currentBannerIndexOnTop1Slideshow, 1, 0)
    }

    if (window.innerWidth <= 480){
        currentBannerIndexOnTop1Slideshow+=1;
        if (currentBannerIndexOnTop1Slideshow===banners1.length){
            currentBannerIndexOnTop1Slideshow = 0
        }
        showBanner(currentBannerIndexOnTop1Slideshow, 1, 0)
    }
}, 3000)

