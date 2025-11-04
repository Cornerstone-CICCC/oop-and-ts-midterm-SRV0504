import cartContext from '../contexts/CartContext.js';

export default function CartItem(product) {
  const item = document.createElement('div');
  item.className = 'cart-item';

  item.innerHTML = `
    <img src="${product.image}" alt="${product.title}" class="cart-item-img" />
    <div class="cart-item-details">
      <h4>${product.title}</h4>
      <p>Price: $${product.price}</p>
      <p>Quantity: <span class="qty">${product.quantity}</span></p>
      <div class="cart-buttons">
        <button class="increase-btn">+</button>
        <button class="decrease-btn">-</button>
        <button class="remove-btn">Remove</button>
      </div>
    </div>
  `;

  const update = () => {
    item.querySelector('.qty').textContent = product.quantity;
  };

  item.querySelector('.increase-btn').addEventListener('click', () => {
    cartContext.addItem(product);
    update();
    window.dispatchEvent(new Event('cart-updated'));
  });

  item.querySelector('.decrease-btn').addEventListener('click', () => {
    if (product.quantity > 1) {
      product.quantity -= 1;
    } else {
      cartContext.removeItem(product.id);
    }
    window.dispatchEvent(new Event('cart-updated'));
  });

  item.querySelector('.remove-btn').addEventListener('click', () => {
    cartContext.removeItem(product.id);
    window.dispatchEvent(new Event('cart-updated'));
  });

  return item;
}
