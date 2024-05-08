function signupUser() {
  // Get success Test
  const successText = document.getElementById('successText');

  // Get form input values
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const email = document.getElementById('email').value;

  // Perform client-side validation
  if (!username || !password || !email) {
      console.error("All fields are required.");
      successText.innerHTML = "Please input all fields";
      return;
  }

  // Check if the user already exists
  const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
  const userExists = existingUsers.some(user => user.username === username);

  if (userExists) {
      console.error("User already exists.");
      successText.innerHTML = "User already exists";
      return;
  }

  // Create a new user
  const newUser = { username, password, email };
  existingUsers.push(newUser);
  localStorage.setItem('../users', JSON.stringify(existingUsers));

  successText.innerHTML = "Success!";
  console.log('User signed up successfully');

  window.location.href = '../home/index.html';
}

// Attach event listener to the sign-up button
const successText = document.getElementById('successText');
successText.innerHTML = "";
document.getElementById('signupButton').addEventListener('click', signupUser);