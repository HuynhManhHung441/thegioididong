const bannerList = document.querySelector(".top-banner-slideshow__banners")
const banners = bannerList.querySelectorAll('a')
console.log(banners.clientWidth)
const prevBtn = document.querySelector('.top-banner-slideshow__buttons--moved .top-banner-slideshow__prev-btn')
const nextBtn = document.querySelector('.top-banner-slideshow__buttons--moved .top-banner-slideshow__next-btn')

let currentBannerIndex = 0;

function showBanner(bannerIndex, widthBannerPerSlide, widthGapPerSlide) {
    const widthSlide = bannerList.clientWidth;
    console.log(widthSlide)
    // if (widthSlide % 1 !=0 ) {
    //     console.log(widthSlide)
    //     widthSlide +=1;
    //     widthSlide = Math.floor(widthSlide)
    //     console.log("*****")
    //     console.log(widthSlide)
    // }
    const widthBanner = widthSlide*widthBannerPerSlide*bannerIndex;
    console.log(widthBanner/bannerIndex)
    const widthGap = widthSlide*widthGapPerSlide*bannerIndex;
    console.log(widthGap)
    bannerList.style.transform = `translateX(-${widthBanner+widthGap}px)`
}
console.log(banners.length);
nextBtn.onclick = function () {
    currentBannerIndex+=2;
    if (currentBannerIndex <= banners.length - 1 ) {
        if (currentBannerIndex == banners.length-1 && banners.length % 2 != 0) {
            currentBannerIndex-=1;
        }
    }
    else {
        currentBannerIndex = 0;
    }
    showBanner(currentBannerIndex)
}


prevBtn.onclick = function () {
    currentBannerIndex-=2;
    if (currentBannerIndex < -1 ) {
        currentBannerIndex = banners.length -2;
    }
    if (currentBannerIndex == -1 && banners.length % 2 != 0){
        currentBannerIndex+=1
    }
    showBanner(currentBannerIndex)
}

setInterval(() => {
    if (window.innerWidth >= 992){
        currentBannerIndex+=2;
        if (currentBannerIndex <= banners.length - 1 ) {
            if (currentBannerIndex == banners.length-1 && banners.length % 2 != 0) {
                currentBannerIndex-=1;
            }
        }
        else {
            currentBannerIndex = 0;
        }
        showBanner(currentBannerIndex, 0.495, 0.01)
    }

    if (window.innerWidth < 992 & window.innerWidth > 480){
        currentBannerIndex+=1;
        console.log(currentBannerIndex, "tablet")
        showBanner(currentBannerIndex, 1, 0)
    }

    if (window.innerWidth <= 480){
        currentBannerIndex+=1;
        console.log(currentBannerIndex, "mobile")
        showBanner(currentBannerIndex, 1, 0)
    }
}, 5000)

