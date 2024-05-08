// JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Get all favorite buttons
    const favoriteButtons = document.querySelectorAll('.favorite-btn');

    // Add click event listener to each favorite button
    favoriteButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Toggle the 'favorited' class on the button
            button.classList.toggle('favorited');

            // Change button text based on its state
            if (button.classList.contains('favorited')) {
                button.textContent = 'Unfavorite';
            } else {
                button.textContent = 'Favorite';
            }
        });
    });
});


