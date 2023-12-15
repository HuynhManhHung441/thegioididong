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

