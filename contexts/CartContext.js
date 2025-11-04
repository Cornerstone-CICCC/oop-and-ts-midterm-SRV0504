const STORAGE_KEY = 'buyme-cart';

const loadCart = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (e) {
    console.error('Error reading localStorage:', e);
    return [];
  }
};

const cart = loadCart();

const saveCart = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
};

const dispatchUpdate = () => {
  saveCart();
  window.dispatchEvent(new CustomEvent('cart-updated'));
};

const addItem = (product) => {
  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  dispatchUpdate();
};

const decreaseItem = (productId) => {
  const existing = cart.find(item => item.id === productId);
  if (existing && existing.quantity > 1) {
    existing.quantity -= 1;
  } else {
    removeItem(productId); 
    return;
  }
  dispatchUpdate();
};

const removeItem = (productId) => {
  const index = cart.findIndex(item => item.id === productId);
  if (index !== -1) {
    cart.splice(index, 1);
    dispatchUpdate();
  }
};

const getCart = () => cart;

export default {
  addItem,
  decreaseItem,
  removeItem,
  getCart
};
