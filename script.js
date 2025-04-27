let cart = [];

function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  alert(productName + " has been added to your cart!");
  updateCartCount();
}

function updateCartCount() {
  document.getElementById('cart-count').textContent = cart.length;
}

function viewCart() {
  const cartSection = document.getElementById('cart-section');
  const cartItems = document.getElementById('cart-items');
  const totalPrice = document.getElementById('total-price');

  cartSection.style.display = 'block';
  cartItems.innerHTML = '';

  let total = 0;
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ₹${item.price}`;
    cartItems.appendChild(li);
    total += item.price;
  });

  totalPrice.textContent = `Total: ₹${total}`;
}
