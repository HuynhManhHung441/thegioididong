
const headerInventoryModalOpenBtn = document.querySelector(".main-header__inventory");
const mainHeaderInventoryModal = document.querySelector(".delivery-address__modal-overlay");
const headerInventoryModalCloseBtn = document.querySelector(".delivery-address__close-modal-btn");
 
function openModal() {
    mainHeaderInventoryModal.classList.remove("hide");
}
 
function closeModal(e, clickedOutside) {
    if (clickedOutside) {
        if (e.target.classList.contains("delivery-address__modal-overlay"))
        mainHeaderInventoryModal.classList.add("hide");
    } else mainHeaderInventoryModal.classList.add("hide");
}
 
headerInventoryModalOpenBtn.addEventListener("click", openModal);
mainHeaderInventoryModal.addEventListener("click", (e) => closeModal(e, true));
headerInventoryModalCloseBtn.addEventListener("click", closeModal);