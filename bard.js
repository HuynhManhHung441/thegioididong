var previousButton = document.getElementById("previousButton");
var nextButton = document.getElementById("nextButton");

previousButton.addEventListener("click", function() {
  currentImage--;
  if (currentImage < 0) {
    currentImage = images.length - 1;
  }
  showImage();
});

nextButton.addEventListener("click", function() {
  currentImage++;
  if (currentImage >= images.length) {
    currentImage = 0;
  }
  showImage();
});