// Import utility functions and data
import { initializeAOS } from './utils/animations.js';
import { handleMobileMenu } from './utils/navigation.js';
import { handleScroll } from './utils/scroll.js';
import { initializeCart } from './utils/cart.js';
import { loadProducts } from './utils/products.js';

// Initialize all functionality
document.addEventListener('DOMContentLoaded', () => {
    initializeAOS();
    handleMobileMenu();
    handleScroll();
    initializeCart();
    loadProducts();
});
