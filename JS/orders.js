let orders = [
  {
    //will be replaced to real array of orders
    date: "15 may 2023",
    number: "№ 3478741",
    item: "Gmail.com PVA",
    amount: "$13.00",
    status: "Completed",
  },
  {
    date: "16 may 2023",
    number: "№ 3478742",
    item: "Gmail.com PVA",
    amount: "$13.00",
    status: "Completed",
  },
  {
    date: "17 may 2023",
    number: "№ 3478743",
    item: "Gmail.com PVA",
    amount: "$13.00",
    status: "Completed",
  },
];

const table = orders.map(
  (order) => `<tr>
<td class="ab-order-history-main-item">${order.date}</td>
<td class="ab-order-history-main-item">${order.number}</td>
<td class="ab-order-history-main-item">${order.item}</td>
<td class="ab-order-history-main-item">${order.amount}</td>
<td class="ab-order-history-main-item"><span>${order.status}</span><button class="ab-view-details-btn">View details</button></td>
</tr>`
).reduce((a,b) => a + b);

tbody.insertAdjacentHTML("afterbegin", table);

const hideBlock = document.getElementById("hideBlock");
(function hide() {
  if (orders.length !== 0) {
    hideBlock.style.display = "none";
  }
})();

const smallSc = orders.map(
  (order) =>
    `<ul class="ab-order-history-mobo-info-item">
    <li><span class="ab-order-history-title-item">Date</span>
      <p class="ab-order-history-main-item">${order.date}</p>
    </li>
    <li>
      <span class="ab-order-history-title-item">Number</span>
      <p class="ab-order-history-main-item">${order.number}</p>
    </li>
    <li>
      <span class="ab-order-history-title-item">Item</span>
      <p class="ab-order-history-main-item">${order.item}</p>
    </li>
    <li>
      <span class="ab-order-history-title-item">Amount due</span>
      <p class="ab-order-history-main-item">${order.amount}</p>
    </li>
    <li>
      <span class="ab-order-history-title-item">status</span>
      <p class="ab-order-history-main-item">
        <span>${order.status}</span>
        <button class="ab-view-details-btn">View details</button>
      </p>
    </li>
  </ul>`
);

smallScreen.insertAdjacentHTML("afterbegin", smallSc);
