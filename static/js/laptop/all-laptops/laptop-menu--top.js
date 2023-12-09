let laptopMenu = document.querySelector(".laptop-menu--top");
let laptopMenuNameList = laptopMenu.querySelectorAll("ul li a p")
console.log(laptopMenuNameList)
// var rectLaptopMenu = laptopMenu.getBoundingClientRect();
// var topViewPortLaptopMenu = rectLaptopMenu.top;

window.addEventListener("scroll", function (event) { 
    let scroll_y = this.scrollY;
    console.log(scroll_y);
    if (scroll_y > 360) {
        laptopMenu.classList.add("laptop-menu--fixed-top");
        for (let i = 0; i < laptopMenuNameList.length; i++) {
            laptopMenuNameList[i].style.color = "#ffffff";
        }
    } else {
        laptopMenu.classList.remove("laptop-menu--fixed-top");
        for (let i = 0; i < laptopMenuNameList.length; i++) {
            laptopMenuNameList[i].style.color = "#000000";
        }
    }
});