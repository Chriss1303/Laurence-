// Product data and loading functionality
const products = {
    jerseys: [
        {
            id: 1,
            name: "Lakers #23 James Jersey",
            price: 89.99,
            image: "https://example.com/lakers-jersey.jpg"
        },
        {
            id: 2,
            name: "Warriors #30 Curry Jersey",
            price: 89.99,
            image: "https://example.com/warriors-jersey.jpg"
        },
        {
            id: 3,
            name: "Nets #7 Durant Jersey",
            price: 89.99,
            image: "https://example.com/nets-jersey.jpg"
        }
    ],
    accessories: [
        {
            id: 4,
            name: "Basketball Headband",
            price: 14.99,
            image: "https://example.com/headband.jpg"
        },
        {
            id: 5,
            name: "Arm Sleeve",
            price: 19.99,
            image: "https://example.com/arm-sleeve.jpg"
        },
        {
            id: 6,
            name: "Basketball Socks",
            price: 12.99,
            image: "https://example.com/socks.jpg"
        }
    ]
};

export function loadProducts() {
    const jerseysGrid = document.getElementById('jerseys-grid');
    const accessoriesGrid = document.getElementById('accessories-grid');

    // Load jerseys
    jerseysGrid.innerHTML = products.jerseys.map(product => createProductCard(product)).join('');

    // Load accessories
    accessoriesGrid.innerHTML = products.accessories.map(product => createProductCard(product)).join('');
}

function createProductCard(product) {
    return `
        <div class="product-card" data-aos="fade-up">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">$${product.price}</div>
                <button class="add-to-cart" onclick="addToCart(${JSON.stringify(product)})">
                    Add to Cart
                </button>
            </div>
        </div>
    `;
}
