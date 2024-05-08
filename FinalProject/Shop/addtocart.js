// Function to add an item to the cart
function addToCart(itemId) {
    // Get the cart from localStorage or initialize it
    const cart = JSON.parse(localStorage.getItem('../cart')) || [];
    
    // Get the existing product from the JSON file
    loadProducts().then(products => {
        const product = products.find(p => p.id === itemId);
        
        if (product) {
            // Check if the product is already in the cart
            const cartItem = cart.find(item => item.id === itemId);
            
            if (cartItem) {
                // Increase quantity if the product is already in the cart
                cartItem.quantity++;
            } else {
                // Add the product to the cart with an initial quantity of 1
                cart.push({ ...product, quantity: 1 });
            }
            
            // Save the updated cart back to localStorage
            localStorage.setItem('../cart', JSON.stringify(cart));
            
            console.log(`${product.name} added to cart`);
        }
    });
}

// Function to remove an item from the cart
function removeFromCart(itemId) {
    // Get the cart from localStorage
    const cart = JSON.parse(localStorage.getItem('../cart')) || [];
    
    // Filter out the item to be removed
    const updatedCart = cart.filter(item => item.id !== itemId);
    
    // Save the updated cart back to localStorage
    localStorage.setItem('../cart', JSON.stringify(updatedCart));
    
    console.log(`Item ${itemId} removed from cart`);
  }

  function loadProducts() {
    return fetch('../products.json')
      .then(response => response.json())
      .then(data => data)
      .catch(error => {
        console.error('Failed to load products:', error);
        return [];
      });
  }