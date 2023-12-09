let laptopMenu = document.querySelector(".laptop-menu--top");
let laptopMenuNameList = laptopMenu.querySelectorAll("ul li a p")
console.log(laptopMenuNameList)
// var rectLaptopMenu = laptopMenu.getBoundingClientRect();
// var topViewPortLaptopMenu = rectLaptopMenu.top;
const softwareElement1 = document.getElementById("softwareElement1")
const softwareElement2 = document.getElementById("softwareElement2")
const softwareElement3 = document.getElementById("softwareElement3")
const softwareElement4 = document.getElementById("softwareElement4")
const softwareElement5 = document.getElementById("softwareElement5")
const softwareElement6 = document.getElementById("softwareElement6")
const softwareElement7 = document.getElementById("softwareElement7")
const softwareElement8 = document.getElementById("softwareElement8")


let softwareIcon1 = document.querySelector('[target_id="icon_software1"]')
let softwareIcon2 = document.querySelector('[target_id="icon_software2"]')
let softwareIcon3 = document.querySelector('[target_id="icon_software3"]')
let softwareIcon4 = document.querySelector('[target_id="icon_software4"]')
let softwareIcon5 = document.querySelector('[target_id="icon_software5"]')
let softwareIcon6 = document.querySelector('[target_id="icon_software6"]')
let softwareIcon7 = document.querySelector('[target_id="icon_software7"]')
let softwareIcon8 = document.querySelector('[target_id="icon_software8"]')



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


function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        (rect.top - 110) <= 100 &&
        // rect.left >= 0 &&
        rect.bottom > 210 //&&
        // rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
// window.addEventListener("scroll", function(event) {
//     const rect = softwareElement1.getBoundingClientRect();
//     console.log(softwareElement1)
//     console.log(rect)

// })

window.addEventListener("scroll", function(event) {
    let Sw1isIn = isInViewport(softwareElement1)
    let Sw2isIn = isInViewport(softwareElement2)
    let Sw3isIn = isInViewport(softwareElement3)
    let Sw4isIn = isInViewport(softwareElement4)
    let Sw5isIn = isInViewport(softwareElement5)
    let Sw6isIn = isInViewport(softwareElement6)
    let Sw7isIn = isInViewport(softwareElement7)
    let Sw8isIn = isInViewport(softwareElement8)

    if (Sw1isIn===true) {
        softwareIcon1.style.backgroundColor = "gold";
        softwareIcon2.style.backgroundColor = "#ffffff";
        softwareIcon3.style.backgroundColor = "#ffffff";
        softwareIcon4.style.backgroundColor = "#ffffff";
        softwareIcon5.style.backgroundColor = "#ffffff";
        softwareIcon6.style.backgroundColor = "#ffffff";
        softwareIcon7.style.backgroundColor = "#ffffff";
        softwareIcon8.style.backgroundColor = "#ffffff";
    }
    else if (Sw2isIn===true) {
        softwareIcon1.style.backgroundColor = "#ffffff";
        softwareIcon2.style.backgroundColor = "gold";
        softwareIcon3.style.backgroundColor = "#ffffff";
        softwareIcon4.style.backgroundColor = "#ffffff";
        softwareIcon5.style.backgroundColor = "#ffffff";
        softwareIcon6.style.backgroundColor = "#ffffff";
        softwareIcon7.style.backgroundColor = "#ffffff";
        softwareIcon8.style.backgroundColor = "#ffffff";
    }
    else if (Sw3isIn===true) {
        softwareIcon1.style.backgroundColor = "#ffffff";
        softwareIcon2.style.backgroundColor = "#ffffff";
        softwareIcon3.style.backgroundColor = "gold";
        softwareIcon4.style.backgroundColor = "#ffffff";
        softwareIcon5.style.backgroundColor = "#ffffff";
        softwareIcon6.style.backgroundColor = "#ffffff";
        softwareIcon7.style.backgroundColor = "#ffffff";
        softwareIcon8.style.backgroundColor = "#ffffff";
    }
    else if (Sw4isIn===true) {
        softwareIcon1.style.backgroundColor = "#ffffff";
        softwareIcon2.style.backgroundColor = "#ffffff";
        softwareIcon3.style.backgroundColor = "#ffffff";
        softwareIcon4.style.backgroundColor = "gold";
        softwareIcon5.style.backgroundColor = "#ffffff";
        softwareIcon6.style.backgroundColor = "#ffffff";
        softwareIcon7.style.backgroundColor = "#ffffff";
        softwareIcon8.style.backgroundColor = "#ffffff";
    }
    else if (Sw5isIn===true) {
        softwareIcon1.style.backgroundColor = "#ffffff";
        softwareIcon2.style.backgroundColor = "#ffffff";
        softwareIcon3.style.backgroundColor = "#ffffff";
        softwareIcon4.style.backgroundColor = "#ffffff";
        softwareIcon5.style.backgroundColor = "gold";
        softwareIcon6.style.backgroundColor = "#ffffff";
        softwareIcon7.style.backgroundColor = "#ffffff";
        softwareIcon8.style.backgroundColor = "#ffffff";
    }
    else if (Sw6isIn===true) {
        softwareIcon1.style.backgroundColor = "#ffffff";
        softwareIcon2.style.backgroundColor = "#ffffff";
        softwareIcon3.style.backgroundColor = "#ffffff";
        softwareIcon4.style.backgroundColor = "#ffffff";
        softwareIcon5.style.backgroundColor = "#ffffff";
        softwareIcon6.style.backgroundColor = "gold";
        softwareIcon7.style.backgroundColor = "#ffffff";
        softwareIcon8.style.backgroundColor = "#ffffff";
    }
    else if (Sw7isIn===true) {
        softwareIcon1.style.backgroundColor = "#ffffff";
        softwareIcon2.style.backgroundColor = "#ffffff";
        softwareIcon3.style.backgroundColor = "#ffffff";
        softwareIcon4.style.backgroundColor = "#ffffff";
        softwareIcon5.style.backgroundColor = "#ffffff";
        softwareIcon6.style.backgroundColor = "#ffffff";
        softwareIcon7.style.backgroundColor = "gold";
        softwareIcon8.style.backgroundColor = "#ffffff";
    }
    else if (Sw8isIn===true) {
        softwareIcon1.style.backgroundColor = "#ffffff";
        softwareIcon2.style.backgroundColor = "#ffffff";
        softwareIcon3.style.backgroundColor = "#ffffff";
        softwareIcon4.style.backgroundColor = "#ffffff";
        softwareIcon5.style.backgroundColor = "#ffffff";
        softwareIcon6.style.backgroundColor = "#ffffff";
        softwareIcon7.style.backgroundColor = "#ffffff";
        softwareIcon8.style.backgroundColor = "gold";
    }
    else {
        softwareIcon1.style.backgroundColor = "#ffffff";
        softwareIcon2.style.backgroundColor = "#ffffff";
        softwareIcon3.style.backgroundColor = "#ffffff";
        softwareIcon4.style.backgroundColor = "#ffffff";
        softwareIcon5.style.backgroundColor = "#ffffff";
        softwareIcon6.style.backgroundColor = "#ffffff";
        softwareIcon7.style.backgroundColor = "#ffffff";
        softwareIcon8.style.backgroundColor = "#ffffff";
    }
})


