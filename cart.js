// Cart functionality
export function initializeCart() {
    const cartBtn = document.getElementById('cart-btn');
    const closeCartBtn = document.getElementById('close-cart');
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    let cart = [];

    // Toggle cart sidebar
    cartBtn.addEventListener('click', () => {
        cartSidebar.classList.add('active');
    });

    closeCartBtn.addEventListener('click', () => {
        cartSidebar.classList.remove('active');
    });

    // Add to cart functionality
    window.addToCart = (product) => {
        cart.push(product);
        updateCart();
        cartSidebar.classList.add('active');
    };

    function updateCart() {
        // Update cart count
        document.getElementById('cart-count').textContent = cart.length;

        // Update cart items
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">$${item.price}</div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${cart.indexOf(item)})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');

        // Update total
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        cartTotal.textContent = total.toFixed(2);
    }

    // Remove from cart functionality
    window.removeFromCart = (index) => {
        cart.splice(index, 1);
        updateCart();
    };
}
