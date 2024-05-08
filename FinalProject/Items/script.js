// This is a placeholder function for future enhancements or additional functionality
function initializePage() {
    // You can add any initialization code here
}

// Call the initializePage function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
});
// This function adds hover effects to product items
function addHoverEffects() {
    const productItems = document.querySelectorAll('.product');

    productItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            item.classList.add('hovered');
        });

        item.addEventListener('mouseleave', function() {
            item.classList.remove('hovered');
        });
    });
}

// This function initializes the page and adds event listeners
function initializePage() {
    addHoverEffects();
}

// Call the initializePage function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
});
