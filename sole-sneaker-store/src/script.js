// This file contains the JavaScript code for the web application, handling interactivity, such as adding items to the cart and managing user actions.

document.addEventListener('DOMContentLoaded', () => {
    const cartCount = document.getElementById('cart-count-flow');
    const cartItemsContainer = document.getElementById('cart-items-flow');
    const cartTotal = document.getElementById('cart-total-flow');
    const notification = document.getElementById('notification-flow');
    let cart = [];

    // Function to update cart count and total
    function updateCart() {
        cartCount.textContent = cart.length;
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        cartTotal.textContent = `KES ${total}`;
    }

    // Function to add item to cart
    function addToCart(product) {
        cart.push(product);
        updateCart();
        showNotification(`${product.name} added to cart!`);
    }

    // Function to show notification
    function showNotification(message) {
        notification.textContent = message;
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }

    // Event listener for add to cart buttons
    document.querySelectorAll('.add-to-cart-flow').forEach(button => {
        button.addEventListener('click', (event) => {
            const productElement = event.target.closest('.product-flow');
            const productName = productElement.querySelector('.product-title-flow').textContent;
            const productPrice = parseInt(productElement.querySelector('.price-flow').textContent.replace('KES ', ''), 10);
            addToCart({ name: productName, price: productPrice });
        });
    });

    // Event listener for cart icon
    document.querySelector('.cart-icon-flow').addEventListener('click', () => {
        const cartSidebar = document.getElementById('cart-sidebar-flow');
        cartSidebar.classList.toggle('active');
        renderCartItems();
    });

    // Function to render cart items
    function renderCartItems() {
        cartItemsContainer.innerHTML = '';
        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item-flow');
            itemElement.textContent = `${item.name} - KES ${item.price}`;
            cartItemsContainer.appendChild(itemElement);
        });
    }
});