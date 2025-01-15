    // Toggle hamburger menu and search bar visibility
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
    const searchBar = document.querySelector('.search-bar');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        searchBar.classList.toggle('active'); // Toggle the search bar visibility
    });

    // Product Data
    const products = [
        { id: 1, name: "T-Shirt", price: 15.99, image: "https://via.placeholder.com/150" },
        { id: 2, name: "Jeans", price: 49.99, image: "https://via.placeholder.com/150" },
        { id: 3, name: "Sneakers", price: 89.99, image: "https://via.placeholder.com/150" },
        { id: 4, name: "Jacket", price: 120.00, image: "https://via.placeholder.com/150" },
        { id: 5, name: "Cap", price: 12.99, image: "https://via.placeholder.com/150" },
        { id: 6, name: "Sunglasses", price: 25.00, image: "https://via.placeholder.com/150" },
        { id: 7, name: "Watch", price: 99.99, image: "https://via.placeholder.com/150" },
        { id: 8, name: "Bag", price: 45.00, image: "https://via.placeholder.com/150" },
        { id: 9, name: "Belt", price: 19.99, image: "https://via.placeholder.com/150" },
        { id: 10, name: "Wallet", price: 29.99, image: "https://via.placeholder.com/150" },
        { id: 11, name: "Scarf", price: 14.99, image: "https://via.placeholder.com/150" },
        { id: 12, name: "Gloves", price: 24.99, image: "https://via.placeholder.com/150" },
];

    // Cart Data
    let cart = [];

    // DOM Elements
    const productsContainer = document.getElementById("products-container");
    const cartContainer = document.getElementById("cart-container");
    const cartTotal = document.getElementById("cart-total");

    // Display Products
    function displayProducts() {
        products.forEach((product) => {
            const productElement = document.createElement("div");
            productElement.classList.add("product");
            productElement.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    
            productsContainer.appendChild(productElement);
        });
    }

    // Add Product to Cart
    function addToCart(productId) {
        const product = products.find((p) => p.id === productId);
        const cartItem = cart.find((item) => item.id === productId);

        if (cartItem) {
            cartItem.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        updateCart();
    }

    // Remove Product from Cart
    function removeFromCart(productId) {
        cart = cart.filter((item) => item.id !== productId);
        updateCart();
    }

    // Update Cart
    function updateCart() {
        cartContainer.innerHTML = "";

        if (cart.length === 0) {
            cartContainer.innerHTML = "<p>Your cart is empty.</p>";
            cartTotal.textContent = "0.00";
            return;
        }

        let total = 0;
        cart.forEach((item) => {
            total += item.price * item.quantity;
            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            cartItem.innerHTML = `
      <span>${item.name} (x${item.quantity})</span>
      <span>$${(item.price * item.quantity).toFixed(2)}</span>
      <button onclick="removeFromCart(${item.id})">Remove</button>
    `;
            cartContainer.appendChild(cartItem);
        });

        cartTotal.textContent = total.toFixed(2);
    }

    // Initialize App
    displayProducts();
    
    
    // Search Products
function searchProducts() {
  const query = document.getElementById("search-input").value.toLowerCase();
  productsContainer.innerHTML = ""; // Clear the products container

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query)
  );

  if (filteredProducts.length === 0) {
    productsContainer.innerHTML = "<p>No products match your search.</p>";
  } else {
    filteredProducts.forEach((product) => {
      const productElement = document.createElement("div");
      productElement.classList.add("product");
      productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productsContainer.appendChild(productElement);
    });
  }
}

// Initialize App
displayProducts();
