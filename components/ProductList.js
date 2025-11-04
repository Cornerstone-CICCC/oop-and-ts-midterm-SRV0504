import ProductItem from './ProductItem.js';

export default function ProductList() {
  const section = document.createElement('section');
  section.className = 'products-section';

  section.innerHTML = `
    <h2 class="section-title">Best sellers</h2>
    <div class="products-grid" id="products-grid"></div>
    <div class="view-more-container">
      <button class="view-more">View More</button>
    </div>
  `;

  const grid = section.querySelector('#products-grid');
  const viewMoreBtn = section.querySelector('.view-more');

  let allProducts = [];
  let showingAll = false;

  const getInitialCount = () => {
    return window.innerWidth < 768 ? 4 : 8;
  };

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
      allProducts = data;
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
