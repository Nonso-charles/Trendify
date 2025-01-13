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
    const cartCount = document.getElementById('cart-count');
    const checkoutButton = document.getElementById('checkout-button');
    const totalPriceElement = document.getElementById('total-price');

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

    // Function to update the cart UI
    function updateCartUI() {
        // Clear the current cart display
        cartItemsContainer.innerHTML = '';

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
            totalPriceElement.textContent = '0.00';
            return;
        }

        // Add cart items to the UI
        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');

            cartItem.innerHTML = `<h4>${item.name}</h4>
            <p>$${item.price.toFixed(2)}
            <button class="remove-button" data-index="${index}">Remove</button>`;

            cartItemsContaine.appendChild(cartItem);
        });

        // Update total price
        const totalPrice = cart.reduce((total, item) => total + item.price, 0);
        totalPriceElement.textContent = totalPrice.toFixed(2);

        // Add event listeners to remove buttons
        const removeButtons = document.querySelectorAll('.remove-button');
        removeButtons.forEach(button => {
            button.addEventListener('click', () => {
                const index = button.getAttribute('data-index');
                removeFromCart(index);
            });
        });
    }

    // Function to remove an item from the cart


