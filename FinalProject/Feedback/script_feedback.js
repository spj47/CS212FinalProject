// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const feedback = document.getElementById("feedback").value;
    const image = document.getElementById("image").files[0]; // Get the first selected file

    // Prepare data to send to the server (e.g., using FormData for file upload)
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("feedback", feedback);
    formData.append("image", image);

    // Example: Send form data to a server using fetch API
    fetch("/submit-feedback", {
        method: "POST",
        body: formData
    })
    .then(response => {
        if (response.ok) {
            // Feedback submitted successfully
            window.location.href = "success.html"; // Redirect to success page
        } else {
            // Error handling
            alert("An error occurred. Please try again later.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("An error occurred. Please try again later.");
    });
}

// Add event listener for form submission
document.getElementById("feedback-form").addEventListener("submit", handleSubmit);
