const QAtopic = document.querySelector(".QA__topics")
const topicList = QAtopic.querySelector("ul")
const topicArray = topicList.querySelectorAll(".QA__specific-topic");

topicArray.forEach(function(specificTopic) {
    let TopicTitleFrame = specificTopic.querySelector("div");
    TopicTitleFrame.addEventListener("click", () => {
        console.log(specificTopic.querySelector("ul"));
        let subtopics = specificTopic.querySelector("ul");  
        if (subtopics.style.display === "none" || subtopics.style.display === "") {
            subtopics.style.display = "flex";
        } else {
            subtopics.style.display = "none";
        }
    })
})


const qaArticle = document.querySelector(".QA__articles")
console.log(qaArticle)
// const lastAppearArticle = document.querySelector("#lastAppearArticle")

const qaArticlesItems = qaArticle.querySelector(".QA-articles__items")

let qaArticleItemList = qaArticlesItems.querySelectorAll(".QA-article-item")
console.log(qaArticleItemList)

const seeMoreQaArticleBtn = qaArticle.querySelector("#seeMoreQaArticleBtn")
// qaArticleItemList.forEach(function(qaArticleItem) {
//     qaArticleItem
// })
let indexQaArticleItem = 0;
let numberItemAppear = 10;
let appearStep = 5;


function appearItems(numberItemAppear) {
    for (let i = 0; i < qaArticleItemList.length; i++) {
        // console.log(qaArticleItemList[i])
        // if (qaArticleItemList[i].getAttribute('id') === "lastAppearArticleAtFirstTime"){
        if ((i+1) <= numberItemAppear){
            qaArticleItemList[i].classList.remove("hide");
        } else {
            qaArticleItemList[i].classList.add("hide");
        }
        // if (i === qaArticleItemList.length -1){
        //     if (!qaArticleItemList[i].classList.contains("hide")){
        //         seeMoreQaArticleBtn.classList.add("hide")
        //     }
        // }
    }
    if (numberItemAppear >= qaArticleItemList.length) {
        seeMoreQaArticleBtn.classList.add("hide")
    }
}

appearItems(numberItemAppear)
seeMoreQaArticleBtn.addEventListener("click", () => {
    numberItemAppear += appearStep;
    appearItems(numberItemAppear)
})












// qaArticleDivList.forEach(function(specificDiv){
//     if
// })

// console.log(qaArticlesItems)

