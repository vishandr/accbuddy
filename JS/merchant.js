let account = localStorage.getItem('account')
let account_obj = JSON.parse(account)
console.log(account_obj)
document.querySelector(".ab-order-info-title").innerHTML = account_obj.provider
document.querySelector(".ab-order-price").innerHTML = account_obj.price
let price = +account_obj.price.slice(1)
let quantity = document.querySelector("#quantity")
let totalAmount = document.querySelector("#totalAmount")
let totalAmount_sum = Math.floor(price * +quantity.value * 100) / 100
totalAmount.innerHTML = totalAmount_sum

quantity.oninput = function() {
    if (quantity.value < 1) {
        quantity.value = 1
    }
    totalAmount.innerHTML = totalAmount_sum
}

console.log('document.cookie = ')
console.log(document.cookie)
