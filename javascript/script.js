function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Replace these values with your actual authentication logic
    var validUsername = "project123";
    var validPassword = "admin123";

    if (username === validUsername && password === validPassword) {
        // Authentication successful, redirect to another file (e.g., dashboard.html)
        window.location.href = "calculator.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
}
