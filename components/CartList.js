import cartContext from '../contexts/CartContext.js';
import CartItem from './CartItem.js';

export default function CartList() {
  const container = document.createElement('div');
  container.className = 'cart-list-container';

  // Título
  const title = document.createElement('h2');
  title.textContent = 'Your Cart';
  container.appendChild(title);

  // Lista de items
  const list = document.createElement('div');
  list.className = 'cart-items';
  container.appendChild(list);

  // Total
  const total = document.createElement('p');
  total.className = 'cart-total';
  container.appendChild(total);

  // Función que dibuja los productos en el carrito
  const renderCart = () => {
    list.innerHTML = '';
    const items = cartContext.getCart();
    let totalPrice = 0;

    if (items.length === 0) {
      list.innerHTML = '<p>Your cart is empty.</p>';
      total.textContent = '';
      return;
    }

    items.forEach(product => {
      const itemNode = CartItem(product);
      list.appendChild(itemNode);

      // Agregar clase para animación suave
      requestAnimationFrame(() => {
        itemNode.classList.add('show');
      });

      totalPrice += product.price * product.quantity;
    });

    total.textContent = `Total: $${totalPrice.toFixed(2)}`;
  };

  // Suscribirse al evento global
  window.addEventListener('cart-updated', renderCart);

  // Primer render
  renderCart();

  return container;
}
