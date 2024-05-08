// Define a function to handle product search
function searchProducts() {
    // Get the search query entered by the user
    const searchQuery = document.getElementById('search-input').value.toLowerCase();
    
    // Get all product items
    const products = document.querySelectorAll('.product');
    
    // Loop through each product item
    products.forEach(product => {
        // Get the product name
        const productName = product.querySelector('h3').textContent.toLowerCase();
        
        // Check if the product name contains the search query
        if (productName.includes(searchQuery)) {
            // If the product matches the search query, display it
            product.style.display = 'block';
        } else {
            // If the product does not match the search query, hide it
            product.style.display = 'none';
        }
    });
}

// Add event listener for the search input
document.getElementById('search-input').addEventListener('input', searchProducts);

// Function to sort products by price
function sortProductsByPrice(order) {
    // Get all product elements
    const products = document.querySelectorAll('.product');

    // Convert NodeList to array for easier manipulation
    const productsArray = Array.from(products);

    // Sort the products array based on the price
    productsArray.sort((a, b) => {
        const priceA = parseFloat(a.querySelector('p').innerText.slice(1)); // Extract price and convert to number
        const priceB = parseFloat(b.querySelector('p').innerText.slice(1)); // Extract price and convert to number

        if (order === 'asc') {
            return priceA - priceB; // Sort in ascending order
        } else {
            return priceB - priceA; // Sort in descending order
        }
    });

    // Clear the main content section
    const mainContent = document.querySelector('main');
    mainContent.innerHTML = '';

    // Append sorted products to the main content section
    productsArray.forEach(product => {
        mainContent.appendChild(product);
    });
}

// Example usage:
// Sort products by price in ascending order
sortProductsByPrice('asc');

// Sort products by price in descending order
sortProductsByPrice('desc');
