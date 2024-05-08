function loadProducts() {
  return fetch('../products.json')
    .then(response => response.json())
    .then(data => data)
    .catch(error => {
      console.error('Failed to load products:', error);
      return [];
    });
}

// Function to display the cart items and total on the page
function displayCart() {
  // Retrieve the cart from localStorage
  const cart = JSON.parse(localStorage.getItem('../cart')) || [];
  
  // Get the cart items container and total element from the HTML
  const cartItemsContainer = document.querySelector('.cart-items');
  const cartTotalElement = document.querySelector('.total p');
  
  // Clear existing cart items
  cartItemsContainer.innerHTML = '';
  
  // Display each item in the cart
  cart.forEach(item => {
      // Create a div for the cart item
      const cartItemDiv = document.createElement('div');
      cartItemDiv.classList.add('cart-item');
      
      // Add the product image
      const img = document.createElement('img');
      img.src = item.image;
      img.alt = item.name;
      cartItemDiv.appendChild(img);
      
      // Create a div for the item details
      const itemDetailsDiv = document.createElement('div');
      itemDetailsDiv.classList.add('item-details');
      
      // Add the product name and price
      const nameP = document.createElement('p');
      nameP.textContent = item.name;
      itemDetailsDiv.appendChild(nameP);
      
      const priceP = document.createElement('p');
      priceP.textContent = `$${item.price.toFixed(2)}`;
      itemDetailsDiv.appendChild(priceP);
      
      // Append item details div to the cart item div
      cartItemDiv.appendChild(itemDetailsDiv);
      
      // Append the cart item div to the cart items container
      cartItemsContainer.appendChild(cartItemDiv);
  });
  
  // Calculate and display the total price
  const total = calculateCartTotal(cart);
  cartTotalElement.textContent = `Total: $${total}`;
}

// Calculate total price of the cart
function calculateCartTotal(cart) {
  let total = 0;
  cart.forEach(item => {
      total += item.price * item.quantity;
  });
  return total.toFixed(2); // Round to 2 decimal places
}

// Load products and initialize the cart display
loadProducts().then(products => {
  displayCart();
});
