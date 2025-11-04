import cartContext from '../contexts/CartContext.js';

export function renderHeader() {
  const header = document.createElement("header");
  header.classList.add("header");

  header.innerHTML = `
    <nav class="navbar">
      <div class="nav-left">
        <button class="burger-menu">&#9776;</button>
        <div class="nav-links">
          <div class="nav-links">
            <a href="index.html" class="nav-link">Home</a>
            <a href="about.html" class="nav-link">About</a>
          </div>


        </div>
      </div>

      <!-- Logo SVG -->
      <div class="nav-title logo">
        <svg width="150" height="50" viewBox="0 0 140 40" xmlns="http://www.w3.org/2000/svg" aria-label="BuyMe logo">
          <text x="0" y="28" font-family="Poppins, sans-serif" font-size="28" font-weight="700" fill="white">
            <tspan fill="#5AF5E7">B</tspan>uy
            <tspan fill="#5AF5E7">M</tspan>e
          </text>
        </svg>
      </div>

      <div class="nav-cart">
        <a href="#" id="cart-toggle">
          <img src="https://cdn-icons-png.flaticon.com/512/107/107831.png" alt="Cart" class="cart-icon" />
          <span class="cart-count" id="cart-count">0</span>
        </a>
      </div>
    </nav>
  `;

  // Burger menu toggle
  setTimeout(() => {
    const burger = document.querySelector(".burger-menu");
    const navLinks = document.querySelector(".nav-links");
    burger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }, 0);

  // Actualizar contador del carrito
  const countSpan = header.querySelector('#cart-count');
  const updateCount = () => {
    const items = cartContext.getCart();
    const totalQty = items.reduce((acc, item) => acc + item.quantity, 0);
    countSpan.textContent = totalQty;
  };

  window.addEventListener('cart-updated', updateCount);
  updateCount();

  return header;
}
