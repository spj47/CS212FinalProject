// Function to load products from a JSON file
function loadProducts() {
  return fetch('../products.json')
    .then(response => response.json())
    .catch(error => {
      console.error('Failed to load products:', error);
      return [];
    });
}

// Function to sort products by price
function sortProductsByPrice(products, ascending) {
  return products.sort((a, b) => {
    return ascending ? a.price - b.price : b.price - a.price;
  });
}

// Function to sort products by type
function sortProductsByType(products) {
  return products.sort((a, b) => a.type.localeCompare(b.type));
}

// Function to render products based on type
function renderProducts(products) {
  const entreeSection = document.getElementById('entree-section');
  const dessertsSection = document.getElementById('desserts-section');

   // Debugging: Check if the sections were found
   console.log('Entree section:', entreeSection);
   console.log('Desserts section:', dessertsSection);

  // Clear current contents of the sections
  entreeSection.innerHTML = '<h2>Entree</h2>';
  dessertsSection.innerHTML = '<h2>Dessert</h2>';

  // Render products in their respective sections
  products.forEach(product => {
    // Create a product element
    const productElement = document.createElement('div');
    productElement.className = 'product';
    productElement.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p>$${product.price.toFixed(2)}</p>
      <button class="favorite-btn">Favorite</button>
      <button class="Add-btn" onclick="addToCart('${product.id}')">Add</button>
      <button class="Remove-btn" onclick="removeFromCart('${product.id}')">Remove</button>
    `;

    // Append the product element to the appropriate section based on type
    if (product.type === 'Entree') {
      entreeSection.appendChild(productElement);
    } else if (product.type === 'Dessert') {
      dessertsSection.appendChild(productElement);
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  // Load products and render them
  loadProducts().then(products => {
      // DEBUG: Check if the sections were found after the DOM has loaded
      const entreeSection = document.getElementById('entree-section');
      const dessertsSection = document.getElementById('desserts-section');

      if (!entreeSection || !dessertsSection) {
          console.error('Failed to find one or both sections');
          return; // Stop the script if the sections are not found
      }

      // Render the products
      renderProducts(products);

      // Add event listeners for sorting buttons
      const costSortButton = document.querySelector('.cost-sort-btn');

      costSortButton.addEventListener('click', () => {
          const sortedProducts = sortProductsByPrice(products, true);
          renderProducts(sortedProducts);
      });
  });
});
