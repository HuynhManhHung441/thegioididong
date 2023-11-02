// Get the modal
var modal = document.getElementById("totalFilterModal");
console.log(modal)

// Get the button that opens the modal
var btn = document.getElementById("totalFilterBtn");
console.log(btn)

// Get the <span> element that closes the modal
var closeModalBtn = document.querySelector(".close-modal");

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
  console.log(modal.style.display)
  console.log(modal)
}

// When the user clicks on <span> (x), close the modal
closeModalBtn.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}