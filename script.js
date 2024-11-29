// Function to handle form submission
document.getElementById('btnLogin').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the values from the form fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (you can enhance this)
    if (username === '' || password === '') {
        alert('Please fill in both the username and password.');
        return;
    }

    // Example credentials (for testing purposes)
    const validUsername = 'Leigh';
    const validPassword = 'Lei123';

    // Check if the entered credentials match
    if (username === validUsername && password === validPassword) {
        alert('Login successful!');
        // You can redirect to another page or do other actions here
        window.location.href = 'index.html'; // Example redirect (change the URL as needed)
    } else {
        alert('Invalid username or password.');
    }
});
