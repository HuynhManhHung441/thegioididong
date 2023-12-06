const orderInfoFormSubmitBtn = document.querySelector(".look_up_order_info_submit_btn");
const orderInforInputSelector = document.querySelector(".input_info__phone_number")
const orderInfoForm = document.querySelector(".look_up_order_info_form")


console.log(orderInfoFormSubmitBtn)
console.log(orderInforInputSelector)
// let orderInforInputValue = orderInforInputSelector.value;
// console.log(orderInforInputValue);


function handleLookUpInputInfo(event) {
    event.preventDefault();
    let alertErorrMessage = document.querySelector(".input_info__message")
    // console.log(orderInfoFormSubmitBtn)

    if (orderInforInputSelector.value === "") {
        orderInforInputSelector.classList.add("alert_error--on-input");
        alertErorrMessage.textContent = "Số điện thoại trống/không đúng định dạng";
    } else {
        orderInforInputSelector.classList.remove("alert_error--on-input");
        alertErorrMessage.textContent = "";
    }
    console.log("handleLookUpInputInfo was worked")
    console.log(orderInforInputSelector.value);
}


orderInfoForm.addEventListener('submit', handleLookUpInputInfo);


