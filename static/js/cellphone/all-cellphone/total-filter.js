const iphoneBtn = document.querySelector(".total-filter-modal__brand-list button:nth-child(1)")
const decisionbtns = document.querySelector(".total-filter-modal__btn--final-decision")
const selectedFilterList = document.querySelector(".total-filter__selected-criteria")

const selectedFilterTitle = selectedFilterList.querySelector("label")

console.log(decisionbtns)
console.log(iphoneBtn)

iphoneBtn.onclick = function() {
    decisionbtns.style.display = "flex";
    selectedFilterTitle.style.display = "inline";            
    selectedFilterList.innerHTML += '<button class="selected-iphone-filer">iPhone (Apple)<i class="fa-solid fa-xmark"></i></button>';
}



