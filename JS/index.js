let allAccounts = [
  {
    id: 1,
    provider: "Mail.ru old - hot, new",
    quantity: "4141241",
    price: "$0.19",
    hot: true,
    sale: false,
    newOffers: true,
    attribute: "fb_marketplace",
  },
  {
    id: 2,
    provider: "Mail.ru Mix - sale, new",
    quantity: "23525",
    price: "$0.15",
    hot: false,
    sale: true,
    newOffers: true,
    attribute: "yahoo",
  },
  {
    id: 3,
    provider: "Mail.ru Biz - hot, sale",
    quantity: "723",
    price: "$0.14",
    hot: true,
    sale: true,
    newOffers: false,
    attribute: "yahoo",
  },
  {
    id: 4,
    provider: "Gmail.com PVA - hot, new",
    quantity: "234",
    price: "$0.12",
    hot: true,
    sale: false,
    newOffers: true,
    attribute: "google_voice",
  },
  {
    id: 5,
    provider: "Global 2017 - hot",
    quantity: "1200",
    price: "$0.11",
    hot: true,
    sale: false,
    newOffers: false,
    attribute: "fb_marketplace",
  },
  {
    id: 6,
    provider: "Gmail.com PVA - hot, sale",
    quantity: "557457",
    price: "$0.09",
    hot: true,
    sale: true,
    newOffers: false,
    attribute: "google_voice",
  },
  {
    id: 7,
    provider: "Global 2018 - sale, new",
    quantity: "546",
    price: "$0.17",
    hot: false,
    sale: true,
    newOffers: true,
    attribute: "yahoo",
  },
  {
    id: 8,
    provider: "Facebook FP - hot, new",
    quantity: "903",
    price: "$0.21",
    hot: true,
    sale: false,
    newOffers: true,
    attribute: "fb",
  },
  {
    id: 9,
    provider: "Gmail.com PVA - sale",
    quantity: "3",
    price: "$0.18",
    hot: false,
    sale: true,
    newOffers: false,
    attribute: "google_voice",
  },
  {
    id: 10,
    provider: "Global 2020 - hot",
    quantity: "363",
    price: "$0.19",
    hot: true,
    sale: false,
    newOffers: false,
    attribute: "yahoo",
  },
  {
    id: 11,
    provider: "Facebook FP - hot, sale",
    quantity: "82",
    price: "$0.2",
    hot: true,
    sale: true,
    newOffers: false,
    attribute: "fb",
  },
  {
    id: 12,
    provider: "Global 2020 - hot",
    quantity: "430",
    price: "$0.16",
    hot: true,
    sale: false,
    newOffers: false,
    attribute: "fb_marketplace",
  },
  {
    id: 13,
    provider: "Twitter BB - sale",
    quantity: "376",
    price: "$0.22",
    hot: false,
    sale: true,
    newOffers: false,
    attribute: "fb",
    // attribute: "twitter",
  },
  {
    id: 14,
    provider: "Mail.ru - new",
    quantity: "465034",
    price: "$0.15",
    hot: false,
    sale: false,
    newOffers: true,
    attribute: "google",
  },
  {
    id: 15,
    provider: "Mail.ru Mix - hot",
    quantity: "23525",
    price: "$0.15",
    hot: true,
    sale: false,
    newOffers: false,
    attribute: "yahoo",
  },
  {
    id: 16,
    provider: "Mail.ru Biz - sale",
    quantity: "7236",
    price: "$0.17",
    hot: false,
    sale: true,
    newOffers: false,
    attribute: "hotmail",
  },
  {
    id: 17,
    provider: "Twitter IM - hot, sale",
    quantity: "7",
    price: "$0.28",
    hot: true,
    sale: true,
    newOffers: false,
    // attribute: "twitter",
    attribute: "fb",
  },
  {
    id: 18,
    provider: "Google.com - hot",
    quantity: "7772",
    price: "$0.11",
    hot: true,
    sale: false,
    newOffers: false,
    attribute: "google",
  },
  {
    id: 19,
    provider: "Facebook FP - hot",
    quantity: "63",
    price: "$0.22",
    hot: true,
    sale: false,
    newOffers: false,
    attribute: "fb",
  },
  {
    id: 20,
    provider: "Hotmail.com - hot, sale",
    quantity: "726",
    price: "$0.19",
    hot: true,
    sale: true,
    newOffers: false,
    attribute: "hotmail",
  },
];

let inputSearch;
function updateInputSearch() {
  inputSearch = document.querySelector("#search").value.trim();
  inputSearchLowercase = inputSearch.toLowerCase();
}
updateInputSearch();

let noSearchResult = "";
function updateNoSearchResult() {
  noSearchResult = `
  <tr class="no-search-result" id="noSearch">
  <td colspan="3">
  <p class="not-fount-text">
  Sorry, no results for <span class="search-keywords"> ${inputSearch}</span>. Please try another search.
  </p>
  </td>
  </tr>
  `;
}

function createAccuntsListOutput(accountsList) {
  return accountsList.length === 0
    ? noSearchResult
    : accountsList
        .map((item) => {
          return `<tr>
  <td>${item.provider}</td>
  <td>${item.quantity}</td>
  <td><span>${item.price}</span> <button class="ab-buy-button">Buy</button>
    <button class="ab-available-button">Not available</button>
</td>
<td class="popup-box-item">
    <div class="ab-account-select-popups">
        <div class="ab-account-select-left-content">
            <h6 class="ab-account-select-title">Gmail.com PVA</h6>
            <p class="ab-description">Accounts are phone verified
                with USA numbers.
                Secret answers are NOT included, recovery e-mails
                are included with
                passwords. US IPs only.
                <br><br>
                Accounts are NOT SUITABLE for Cash App or Google
                Voice creation!
                <br><br>
                Gmail.com Stable USA Plus
            </p>
        </div>
        <div class="ab-account-select-right-content">
            <img src="./assests/image/gmail-icons.svg" width="56"
                height="56" alt="google icons"
                class="account-types-icons">
                <a href="./merchant.html"><button class="ab-button-style buy-button" id=${item.id} onclick="buyButton(event)"> Buy</button></a>
        </div>
    </div>
</td>
</tr>`;
        })
        .reduce((a, b) => a + b, "");
}

// function setCookie() {
//   document.cookie = 'name=John'
// }

function buyButton(event){
  let id = event.target.id;
  let account = allAccounts.find((acc) => acc.id == id);
  console.log(account);
  localStorage.setItem("account", JSON.stringify(account));
  document.cookie = 'account_id='+id; // workable
  // setCookie(account.id, account.provider, {'price=': account.price, secure: true, samesite: lax })
  // document.cookie = 'account_id='+ account.id +';' + 'provider='+ account.provider +';' + 'price=' + account.price +';' + 'max-age=3600;'
};

let filteredAccounts;
function updateFilteredBySearchAccounts(accountsList) {
  filteredAccounts = accountsList.filter((account) =>
    account.provider.toLowerCase().includes(inputSearchLowercase)
  );
}
updateFilteredBySearchAccounts(allAccounts);

function updatePageWithFilteredAccounts(place, filteredArray) {
  place.innerHTML = createAccuntsListOutput(filteredArray);
}

updatePageWithFilteredAccounts(allAccountsList, filteredAccounts);

const hidePromo = () => {
  if (inputSearch.length || activeAttribute.id !== "allAcc"){
    promosection.style.display = "none";
  }else {
    promosection.style.display = "block";
  }
};

search.oninput = function () {
  updateInputSearch();
  hidePromo();
  updateNoSearchResult();
  updateFilteredBySearchAccounts(filteredByAttr);
  updatePageWithFilteredAccounts(allAccountsList, filteredAccounts);
};

//for index.html mouseover activation
function changeBgColor(event) {
  event.target.classList.add("add-bg-color");
}

function changeBgColorBack(event) {
  event.target.classList.remove("add-bg-color");
}

//filtering by Provider
const providerUp = document.querySelector("#providerUp");
providerUp.onclick = function () {
  filteredAccounts = filteredAccounts.sort((a, b) =>
    a.provider.localeCompare(b.provider)
  )
  updatePageWithFilteredAccounts(filteredByCategoryOutput, filteredAccounts);
};

const providerDown = document.querySelector("#providerDown");
providerDown.onclick = function () {
  filteredAccounts = filteredAccounts.sort((a, b) =>
    b.provider.localeCompare(a.provider)
  );
  updatePageWithFilteredAccounts(filteredByCategoryOutput, filteredAccounts);
};

//filtering by Quantity
const quantityUp = document.querySelector("#quantityUp");
quantityUp.onclick = function () {
  filteredAccounts = filteredAccounts.sort((a, b) => a.quantity - b.quantity);
  updatePageWithFilteredAccounts(filteredByCategoryOutput, filteredAccounts);
};

const quantityDown = document.querySelector("#quantityDown");
quantityDown.onclick = function () {
  filteredAccounts = filteredAccounts.sort((a, b) => b.quantity - a.quantity);
  updatePageWithFilteredAccounts(filteredByCategoryOutput, filteredAccounts);
};

//filtering by Price
const priceUp = document.querySelector("#priceUp");
priceUp.onclick = function () {
  filteredAccounts = filteredAccounts.sort(
    (a, b) => a.price.slice(1) - b.price.slice(1)
  );
  updatePageWithFilteredAccounts(filteredByCategoryOutput,filteredAccounts);
};

const priceDown = document.querySelector("#priceDown");
priceDown.onclick = function () {
  filteredAccounts = filteredAccounts.sort(
    (a, b) => b.price.slice(1) - a.price.slice(1)
  );
  updatePageWithFilteredAccounts(filteredByCategoryOutput, filteredAccounts);
};

//working with Attribut-1 buttons
let attrButtonsBlock = document.querySelector(".ab-account-types-list-tabs");
let buttons = attrButtonsBlock.querySelectorAll(".account-tabs-btn");
let attrButtonsArr = Array.from(buttons);
let categoryTabs = document.querySelector(".ab-account-category-tabs");
let categoryBtn = categoryTabs.querySelectorAll(".account-category-btn");
let categoryBtnArr = Array.from(categoryBtn);

function activateAttrButton(event) {
  if (event.target.classList.contains("active")) {
    return;
  } else {
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("active");
    }
    event.target.classList.add("active");
  }
}

attrButtonsBlock.addEventListener("click", activateAttrButton);

let filteredByAttr = allAccounts;

function defineActiveAttr(){
  activeAttribute = attrButtonsArr.find((btn) => btn.classList.contains("active"))
};
defineActiveAttr();

function filterByAttribute(){
  if (activeAttribute.id === "allAcc") {
    return (filteredByAttr = allAccounts);
  } else 
  return (filteredByAttr = allAccounts.filter((acc) => acc.attribute === activeAttribute.id))
};

attrButtonsBlock.onclick = () => {
  defineActiveAttr();
  hidePromo();
  search.value = "";
  updatePageWithFilteredAccounts(allAccountsList, filterByAttribute());
};

function updateHotAccounts() {
  let hotAccounts = allAccounts.filter((acc) => acc.hot === true);
  return hotAccounts;
}

updatePageWithFilteredAccounts(filteredByCategoryOutput, updateHotAccounts())

//working with hot/sale/new buttons
hot.onclick = () => {
  if (hot.classList.contains("active")) {
    return;
  } else {
    hot.classList.toggle("active");
    sale.classList.remove("active");
    newOffers.classList.remove("active");
    filteredAccounts = allAccounts.filter((acc) => acc.hot === true);
  }
  updatePageWithFilteredAccounts(filteredByCategoryOutput, filteredAccounts);
};

sale.onclick = () => {
  if (sale.classList.contains("active")) {
    return;
  } else {
    sale.classList.toggle("active");
    hot.classList.remove("active");
    newOffers.classList.remove("active");
    filteredAccounts = allAccounts.filter((acc) => acc.sale === true);
  }
  updatePageWithFilteredAccounts(filteredByCategoryOutput, filteredAccounts);
};

newOffers.onclick = () => {
  if (newOffers.classList.contains("active")) {
    return;
  } else {
    newOffers.classList.toggle("active");
    hot.classList.remove("active");
    sale.classList.remove("active");
    filteredAccounts = allAccounts.filter((acc) => acc.newOffers === true);
  }
  updatePageWithFilteredAccounts(filteredByCategoryOutput, filteredAccounts);
};
