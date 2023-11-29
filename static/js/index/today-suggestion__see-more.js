const todaySuggestionCardList = document.querySelector(".today-suggestion__for-you-list")
const todaySuggestionSeeMoreBtn = document.querySelector(".today-suggestion button")
const todaySuggestionForYouList = document.querySelector(".today-suggestion__for-you-list")
const todaySuggestionGamingLaptopList = document.querySelector(".today-suggestion__gaming-laptop-list")
const todaySuggestionDiscountedAccessoryList = document.querySelector(".today-suggestion__discounted-accessory-list")
const todaySuggestionCheapTabletList = document.querySelector(".today-suggestion__cheap-tablet-list")
const todaySuggestionTypes = document.querySelectorAll(".today-suggestion__types a")

let currentTypeIndex = 0;

function showAllCardsInList () {
    todaySuggestionCardList.style.height = "max-content";
    todaySuggestionSeeMoreBtn.style.display = "none";
}


todaySuggestionSeeMoreBtn.addEventListener("click", showAllCardsInList);


function changeBackgroundColorTodaySugesstionType (typeIndex) {
    todaySuggestionTypes.style.backgroundColor = "#ffffff";
    todaySuggestionTypes[typeIndex].style.backgroundColor = "#feb70b";
    

    if (typeIndex === 0) {
        todaySuggestionForYouList.style.display ="none";
        todaySuggestionGamingLaptopList.style.display ="none";
        todaySuggestionDiscountedAccessoryList.style.display ="none";
        todaySuggestionCheapTabletList.style.display ="none";
        todaySuggestionForYouList.style.display ="flex";
    }
    if (typeIndex === 1) {
        todaySuggestionForYouList.style.display ="none";
        todaySuggestionGamingLaptopList.style.display ="none";
        todaySuggestionDiscountedAccessoryList.style.display ="none";
        todaySuggestionCheapTabletList.style.display ="none";
        todaySuggestionGamingLaptopList.style.display ="flex";
    }

    if (typeIndex === 2) {
        todaySuggestionForYouList.style.display ="none";
        todaySuggestionGamingLaptopList.style.display ="none";
        todaySuggestionDiscountedAccessoryList.style.display ="none";
        todaySuggestionCheapTabletList.style.display ="none";
        todaySuggestionDiscountedAccessoryList.style.display ="flex";
    }
    if (typeIndex === 3) {
        todaySuggestionForYouList.style.display ="none";
        todaySuggestionGamingLaptopList.style.display ="none";
        todaySuggestionDiscountedAccessoryList.style.display ="none";
        todaySuggestionCheapTabletList.style.display ="none";
        todaySuggestionCheapTabletList.style.display ="flex";
    }
}

for (var i = 0, len = todaySuggestionTypes.length; i < len; i++)
{
    todaySuggestionTypes.children[i].addEventListener("click", changeBackgroundColorTodaySugesstionType(i));
}