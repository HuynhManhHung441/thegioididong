const bannerListOfTop1Slideshow = document.querySelector(".top-header__slide .slideshow__banner-list")
const Top1SlideshowBanners = bannerListOfTop1Slideshow.querySelectorAll('.banner--on-desktop a')

const prevBtnOnTop1Slideshow = document.querySelector('.slideshow__buttons--moved .prev-btn')
const nextBtnOnTop1Slideshow = document.querySelector('.slideshow__buttons--moved .next-btn')
let currentBannerIndexOnTop1Slideshow = 0;

function showBannerOnTop1Slideshow(bannerIndex, widthBannerPerSlide, widthGapPerSlide) {
    const widthSlideOnTop1Slideshow = bannerListOfTop1Slideshow.clientWidth;
    const widthBannerOnTop1Slideshow = widthSlideOnTop1Slideshow*widthBannerPerSlide*bannerIndex;
    const widthGapOnTop1Slideshow = widthSlideOnTop1Slideshow*widthGapPerSlide*bannerIndex;
    bannerListOfTop1Slideshow.style.transform = `translateX(-${widthBannerOnTop1Slideshow+widthGapOnTop1Slideshow}px)`;
}

nextBtnOnTop1Slideshow.onclick = function () {
    currentBannerIndexOnTop1Slideshow+=1;
    if (currentBannerIndexOnTop1Slideshow === Top1SlideshowBanners.length) {
        currentBannerIndexOnTop1Slideshow = 0;
    }
    console.log("Clicked success")
    showBannerOnTop1Slideshow(currentBannerIndexOnTop1Slideshow, 1, 0)
}

prevBtnOnTop1Slideshow.onclick = function () {
    currentBannerIndexOnTop1Slideshow-=1;
    if (currentBannerIndexOnTop1Slideshow < 0) {
        currentBannerIndexOnTop1Slideshow = Top1SlideshowBanners.length -1;
    }
    console.log("Clicked success")
    showBannerOnTop1Slideshow(currentBannerIndexOnTop1Slideshow, 1, 0)
}

setInterval(() => {
    if (window.innerWidth >= 992){
        currentBannerIndexOnTop1Slideshow+=1;
        if (currentBannerIndexOnTop1Slideshow === Top1SlideshowBanners.length){
            currentBannerIndexOnTop1Slideshow = 0;
        }
        showBannerOnTop1Slideshow(currentBannerIndexOnTop1Slideshow, 1, 0)
    }

    if (window.innerWidth < 992 & window.innerWidth > 480){
        currentBannerIndexOnTop1Slideshow+=1;
        if (currentBannerIndexOnTop1Slideshow === Top1SlideshowBanners.length){
            currentBannerIndexOnTop1Slideshow = 0;
        }
        showBannerOnTop1Slideshow(currentBannerIndexOnTop1Slideshow, 1, 0)
    }

    if (window.innerWidth <= 480){
        currentBannerIndexOnTop1Slideshow+=1;
        if (currentBannerIndexOnTop1Slideshow === Top1SlideshowBanners.length){
            currentBannerIndexOnTop1Slideshow = 0;
        }
        showBannerOnTop1Slideshow(currentBannerIndexOnTop1Slideshow, 1, 0)
    }
}, 5000)

