// Dummy data for demonstration
const newItems = [
    { name: "New Item 1", price: 20, image: "new-item1.jpg" },
    { name: "New Item 2", price: 25, image: "new-item2.jpg" }
];

const salesData = [
    { name: "Summer Sale", discount: 10 },
    { name: "Holiday Special", discount: 15 }
];

// Function to display new items on the page
function displayNewItems() {
    const newItemsContainer = document.getElementById("new-items-container");
    newItemsContainer.innerHTML = "";
    newItems.forEach(item => {
        const newItemElement = document.createElement("div");
        newItemElement.classList.add("product");
        newItemElement.innerHTML = `
            <a href="#shop"><img src="${item.image}" alt="${item.name}"></a>
            <p>${item.name}</p>
            <p>$${item.price}</p>
        `;
        newItemsContainer.appendChild(newItemElement);
    });
}

// Function to display new sales on the page
function displaySales() {
    const salesContainer = document.getElementById("sales-container");
    salesContainer.innerHTML = "";
    salesData.forEach(sale => {
        const newSaleElement = document.createElement("div");
        newSaleElement.classList.add("sale");
        newSaleElement.innerHTML = `
            <p>${sale.name}</p>
            <p>Discount: ${sale.discount}%</p>
        `;
        salesContainer.appendChild(newSaleElement);
    });
}

// Function to handle form submission for adding new items
function addNewItem(event) {
    event.preventDefault();
    const itemName = document.getElementById("item-name").value;
    const itemPrice = document.getElementById("item-price").value;
    // Dummy logic to send data to backend and update page
    const newItem = { name: itemName, price: itemPrice };
    newItems.push(newItem);
    displayNewItems(); // Update page with new item
}

// Function to handle form submission for adding new sales
function addNewSale(event) {
    event.preventDefault();
    const saleName = document.getElementById("sale-name").value;
    const saleDiscount = document.getElementById("sale-discount").value;
    // Dummy logic to send data to backend and update page
    const newSale = { name: saleName, discount: saleDiscount };
    salesData.push(newSale);
    displaySales(); // Update page with new sale
}

// Event listeners for form submissions
document.getElementById("add-item-form").addEventListener("submit", addNewItem);
document.getElementById("add-sale-form").addEventListener("submit", addNewSale);

// Initial display of new items and sales
displayNewItems();
displaySales();
