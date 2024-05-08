// Function to handle user login
function loginUser() {
  // Get successText
  const successText = document.getElementById('successText');
  successText.innerHTML = "";

  // Get form input values
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Perform client-side validation
  if (!username || !password) {
      console.error("Both username and password are required.");
      return;
  }

  // Get the list of users from localStorage
  const existingUsers = JSON.parse(localStorage.getItem('../users')) || [];

  // Find the user with the given username and password
  const user = existingUsers.find(user => user.username === username && user.password === password);

  if (user) {
      console.log('User logged in successfully');
      successText.innerHTML = "User logged in successfully";

      // Store the logged-in user's information in sessionStorage
      sessionStorage.setItem('loggedInUser', JSON.stringify(user));

  } else {
      console.error('Invalid username or password');
      successText.innerHTML = "Invalid username or password";
  }
}

// Attach event listener to the login button
const successText = document.getElementById('successText');
  successText.innerHTML = "";
document.getElementById('loginButton').addEventListener('click', loginUser);