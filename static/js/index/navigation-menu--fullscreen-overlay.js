const mainHeaderMenuIcon = document.querySelector(".main-header__menu")

const fullscreenOverlayNavMenu = document.querySelector(".navigation-menu--fullscreen-overlay")
const navMenuCloseBtn = fullscreenOverlayNavMenu.querySelector(".navigation-menu__content .nav-menu__close-btn")

mainHeaderMenuIcon.addEventListener("click", () => {
    fullscreenOverlayNavMenu.style.left = "0%";
})

navMenuCloseBtn.addEventListener("click", () => {
    fullscreenOverlayNavMenu.style.left = "100%";
})

