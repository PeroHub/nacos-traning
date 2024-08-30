// Get the modal
const modal = document.getElementById('loginModal');

// Get the button that opens the modal
const btn = document.getElementById('loginBtn');

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = 'block';
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = 'none';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Handle form submission
document.getElementById('loginForm').onsubmit = function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get form values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Example credentials (in a real application, these would be validated server-side)
    const validUsername = 'student';
    const validPassword = 'password123';

    // Basic validation
    // this is for consitiononoon
    if (username === validUsername && password === validPassword) {
        // Close the modal
        modal.style.display = 'none';

        // Store login status in local storage (optional)
        localStorage.setItem('loggedIn', 'true');

        // Redirect to the dashboard
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password.');
    }
}
