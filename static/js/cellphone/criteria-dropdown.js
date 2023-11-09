const criteriaDropdownBtn = document.querySelector(".criteria--dropdown button")

let criteriaDropdownBox = document.querySelector(".criteria__content")

criteriaDropdownBtn.onclick = function (){
    // criteriaDropdownBtn.classList.toggle("criteria-btn--showed-dropdown")
    criteriaDropdownBox.classList.toggle("criteria__content--showed")
}
