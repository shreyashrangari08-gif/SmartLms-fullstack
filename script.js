// Check if user is registered
function checkRegistration() {
    const user = localStorage.getItem('registeredUser');
    if (!user) {
        alert("Pehle Register karein!");
        return false;
    }
    return true;
}

// Login function (HTML mein onclick="loginUser()" lagana hoga)
function loginUser() {
    if (checkRegistration()) {
        alert("Login Successful! Welcome back.");
    } else {
        window.location.href = "register.html"; // Redirect to register
    }
}
