import { renderHeader } from './components/Header.js';
import Hero from './components/Hero.js';
import Footer from './components/Footer.js';
import ProductList from './components/ProductList.js';
import NewArrivals from './components/NewArrivals.js';
import CartList from './components/CartList.js';

export function App() {
  const app = document.getElementById('app');
  app.innerHTML = '';

  // 1. Header (se usa en ambas vistas)
  const header = renderHeader();
  app.appendChild(header);

  // 2. Revisar si es página about
  if (window.location.hash === '#about') {
    const section = document.createElement('section');
    section.className = 'about-section';
    section.innerHTML = `
      <div class="about-container">
        <h1>About BuyMe</h1>
        <p>BuyMe is your go-to store for premium quality items and unbeatable deals.</p>
        <p>We are a team of passionate creators bringing you stylish, functional, and affordable products for everyday use.</p>
        <p>Thank you for visiting — we hope you enjoy your shopping experience!</p>
      </div>
    `;
    app.appendChild(section);

    const footer = Footer();
    app.appendChild(footer);
    return; // no continuar con la tienda
  }

  // 3. Hero
  const hero = document.createElement('div');
  hero.innerHTML = Hero();
  app.appendChild(hero);

  // 4. Product Sections
  app.appendChild(ProductList());
  app.appendChild(NewArrivals());

  // 5. Cart Sidebar
  const cart = CartList();
  cart.id = 'cart-container';
  app.appendChild(cart);

  // 6. Overlay
  const overlay = document.createElement('div');
  overlay.id = 'cart-overlay';
  app.appendChild(overlay);

  // 7. Footer
  const footer = Footer();
  app.appendChild(footer);

  // 8. Toggle carrito
  setTimeout(() => {
    const toggle = document.getElementById('cart-toggle');
    const cartBox = document.getElementById('cart-container');
    const overlayBox = document.getElementById('cart-overlay');

    if (toggle && cartBox && overlayBox) {
      toggle.addEventListener('click', (e) => {
        e.preventDefault();
        cartBox.classList.toggle('active');
        overlayBox.classList.toggle('active');
      });

      overlayBox.addEventListener('click', () => {
        cartBox.classList.remove('active');
        overlayBox.classList.remove('active');
      });
    }
  }, 0);
}
