// Sample product data
const products = [
    { id: 1, name: 'Cheese Burger', price: 200.00 , imageUrl: '/static/images/cheeseburger.jpg'},
    { id: 2, name: 'Ramen', price: 300.00, imageUrl: '/static/images/ramen.jpg'},
    { id: 3, name: 'Tacos', price: 500.00, imageUrl: '/static/images/tacos.jpg'},
    { id: 4, name: 'Pizza', price: 800.00, imageUrl: '/static/images/pizza.jpg'},
    { id: 5, name: 'Fries', price: 100.00, imageUrl: '/static/images/fries.jpg'},
    { id: 6, name: 'Coke', price: 60.00, imageUrl: '/static/images/coke.jpg'}
];

// Sample cart data
let cart = [];

// Function to display products on the page
function displayProducts() {
    const productsContainer = document.getElementById('products-container');

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product'); // Add a class for styling (optional)

        productDiv.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}" onclick="addToCart(${product.id})">
            <p>${product.name}</p>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsContainer.appendChild(productDiv);
    });
}


// Function to add a product to the cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

// Function to update the cart display
function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');

    // Clear the cart display
    cartItemsContainer.innerHTML = '';

    // Display each item in the cart
    cart.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsContainer.appendChild(cartItem);
    });

    // Calculate and display the total price
    const total = cart.reduce((acc, item) => acc + item.price, 0);
    totalElement.textContent = total.toFixed(2);
}

// Function to simulate checkout (clears the cart)
// function checkout() {
//     alert('Thank you for your purchase!');
//     cart = [];
//     updateCart();
// }

function redirectToCheckout() {
    window.location.href = 'checkout.html';
}
// document.getElementById("checkoutButton").onclick = function () {
//     location.href = "/templates/checkout.html";
// };

// Call the displayProducts function on page load
window.onload = function() {
    displayProducts();
};