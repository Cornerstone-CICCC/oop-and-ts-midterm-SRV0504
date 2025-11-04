import cartContext from '../contexts/CartContext.js';

export default function ProductItem(product) {
  const container = document.createElement('div');
  container.classList.add('product-card');

  container.innerHTML = `
    <img src="${product.image}" class="product-img" alt="${product.title}" />
    <h3 class="product-title">${product.title}</h3>
    <p class="product-price">$${product.price}</p>
    <button class="add-to-cart">Add to Cart</button>
  `;

  const button = container.querySelector('.add-to-cart');
  button.addEventListener('click', () => {
    cartContext.addItem(product); // El evento 'cart-updated' ya se despacha desde CartContext
  });

  return container;
}
