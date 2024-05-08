// Define stock data for each item
const stockData = [
    { name: "Special Prosciutto Cotto Panino", price: 20, image: "IMG_4099.jpg", stock: 26 },
    { name: "Special Roasted Pancetta Pinsa", price: 25, image: "IMG_E6813E930FAE-1.jpeg", stock: 30 },
    { name: "Ossobucco Ravioli Special", price: 30, image: "IMG_4098.jpg", stock: 20 }
];

// Function to render items dynamically based on stock availability
function renderItems() {
    const itemsContainer = document.getElementById("new-items-container");
    itemsContainer.innerHTML = "";

    const displayedItems = []; // Array to store names of items already displayed

    stockData.forEach(item => {
        if (item.stock > 0 && !displayedItems.includes(item.name)) {
            const newItemElement = document.createElement("div");
            newItemElement.classList.add("product");
            newItemElement.innerHTML = `
                <a href="#shop">
                    <img src="${item.image}" alt="${item.name}">
                </a>
                <p>${item.name}</p>
                <p>$${item.price}</p>
                <p>Stock: ${item.stock}</p>
            `;
            itemsContainer.appendChild(newItemElement);
            
            displayedItems.push(item.name); // Add item name to displayedItems array
        }
    });
}

// Initialize the page
function initializePage() {
    renderItems();
}

// Call the initializePage function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
});
