import ProductItem from './ProductItem.js';

export default function NewArrivals() {
  const section = document.createElement('section');
  section.className = 'products-section';

  section.innerHTML = `
    <h2 class="section-title">New Arrivals</h2>
    <div class="products-grid" id="arrivals-grid"></div>
    <div class="view-more-container">
      <button class="view-more" id="arrivals-toggle">View More</button>
    </div>
  `;

  const grid = section.querySelector('#arrivals-grid');
  const viewMoreBtn = section.querySelector('#arrivals-toggle');

  let allProducts = [];
  let showingAll = false;

  const getInitialCount = () => window.innerWidth < 768 ? 4 : 8;
  let initialCount = getInitialCount();

  const renderProducts = (products) => {
    grid.innerHTML = '';
    products.forEach(product => {
      const card = ProductItem(product);
      grid.appendChild(card);
    });
  };

  const updateView = () => {
    if (showingAll) {
      renderProducts(allProducts);
      viewMoreBtn.textContent = 'View Less';
    } else {
      initialCount = getInitialCount();
      renderProducts(allProducts.slice(0, initialCount));
      viewMoreBtn.textContent = 'View More';
    }
  };

  fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
      allProducts = data.reverse(); // Los últimos productos primero
      updateView();
    })
    .catch(err => {
      console.error('Error loading products:', err);
      grid.innerHTML = '<p>Error loading products.</p>';
    });

  viewMoreBtn.addEventListener('click', () => {
    showingAll = !showingAll;
    updateView();
  });

  window.addEventListener('resize', () => {
    if (!showingAll) {
      const newCount = getInitialCount();
      if (newCount !== initialCount) {
        initialCount = newCount;
        renderProducts(allProducts.slice(0, initialCount));
      }
    }
  });

  return section;
}
