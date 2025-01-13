    // Toggle hamburger menu and search bar visibility
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
    const searchBar = document.querySelector('.search-bar');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        searchBar.classList.toggle('active'); // Toggle the search bar visibility
    });

    //Select all "Add to Cart" buttons and the cart message element
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartMessage = document.getElementById('cart-message');

    // Array to store cart items 
    let cart = [];

    // Function to add a product to the cart
    function addToCart(name, price) {
        // Add product details to the cart array
        cart.push({ name, price: parseFloat(price) });
        // Display success message
        displayCartMessage(`${name} added to your cart`);
    }

    // Function to display a success message
    function displayCartMessage(message) {
        cartMessage.textContent = message;
        cartMessage.style.display = 'block';
        // Hide message after 3 seconds
        setTimeout(() => {
            cartMessage.style.display = 'none';
        }, 3000);
    }

    // Add event listener to all "Add to Cart" buttons
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.getAttribute('data-name');
            const productPrice = button.getAttribute('data-price');
            addToCart(productName, productPrice);
        });
    });


    // Select DOM elements
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartCount = document.getElementById('cart-count');
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const checkoutButton = document.getElementById('checkout-button');

    // Array to store cart items
    let cart = [];

    