let mainHeaderInventoryBtn = document.querySelector(".main-header__inventory")
let mainHeaderInventoryModal = document.querySelector(".delivery-address-modal__background")
mainHeaderInventoryBtn.addEventListener("click", function() {
    mainHeaderInventoryModal.style.display = "flex";
});

document.querySelector(".delivery-address-modal__close-btn").addEventListener("click", function() {
    mainHeaderInventoryModal.style.display = "none";
});

window.onclick = function(event) {
    if (event.target == mainHeaderInventoryModal) {
        mainHeaderInventoryModal.style.display = "none";
    }
}