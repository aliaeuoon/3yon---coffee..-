let total = 0;
let quantity = 0;
let currentPrice = 0;
let currentName = "";

function addToOrder(name, price) {
  currentName = name;
  currentPrice = price;
  quantity = 1;

  showOrder();
}

function increaseQuantity() {
  quantity++;
  showOrder();
}

function decreaseQuantity() {
  if (quantity > 1) {
    quantity--;
    showOrder();
  }
}

function showOrder() {
  total = quantity * currentPrice;

  document.getElementById("orderItems").innerHTML = `
    <p>${currentName} - ${currentPrice} جنيه</p>

    <button onclick="decreaseQuantity()">−</button>

    <span class="order-quantity">${quantity}</span>

    <button onclick="increaseQuantity()">+</button>
  `;

  document.getElementById("total").textContent = total;
}