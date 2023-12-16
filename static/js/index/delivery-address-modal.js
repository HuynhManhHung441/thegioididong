
const headerInventoryModalOpenBtn = document.querySelector(".main-header__inventory");
const mainHeaderInventoryModal = document.querySelector(".delivery-address__modal-overlay");
const headerInventoryModalCloseBtn = document.querySelector(".delivery-address__close-modal-btn");
 
function handleOpenCloseModal () {
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
}

async function  getLocationData (){
    const response = await fetch('https://provinces.open-api.vn/api/p/')
    const results = await response.json()


    return results
}

function renderModalContent(){
    const deliveryAddressProvinceList = document.querySelector(".delivery-address__province-list");

    getLocationData()
    .then(results => {
        console.log(results)
        let html = ''
        for(let province of results) {
            html += `<li>${province.name}</li>`
        }
        deliveryAddressProvinceList.innerHTML = html
    })
    .catch(e => {
        console.log(e)
    })
}


renderModalContent()
handleOpenCloseModal();

