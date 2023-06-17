let account = localStorage.getItem('account')
let account_obj = JSON.parse(account)
console.log(account_obj)
document.querySelector(".ab-order-info-title").innerHTML = account_obj.provider
document.querySelector(".ab-order-price").innerHTML = account_obj.price
let price = +account_obj.price.slice(1)
let quantity = document.querySelector("#quantity")
let totalAmount = document.querySelector("#totalAmount")
totalAmount.innerHTML = price * +quantity.value

quantity.oninput = function() {
    if (quantity.value < 1) {
        quantity.value = 1
    }
    totalAmount.innerHTML = price * +quantity.value
}
