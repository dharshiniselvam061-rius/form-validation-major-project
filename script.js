// Validate Name
function validateName() {
    let name = document.getElementById("name").value;
    let error = document.getElementById("nameError");

    if (name.length < 5) {
        error.innerText = "Name must be at least 5 characters";
        return false;
    } else {
        error.innerText = "";
        return true;
    }
}

// Validate Email
function validateEmail() {
    let email = document.getElementById("email").value;
    let error = document.getElementById("emailError");

    if (!email.includes("@")) {
        error.innerText = "Enter a valid email";
        return false;
    } else {
        error.innerText = "";
        return true;
    }
}

// Validate Phone
function validatePhone() {
    let phone = document.getElementById("phone").value;
    let error = document.getElementById("phoneError");

    if (phone.length !== 10 || phone === "1234567890" || isNaN(phone)) {
        error.innerText = "Enter valid 10-digit phone number";
        return false;
    } else {
        error.innerText = "";
        return true;
    }
}

// Validate Password
function validatePassword() {
    let password = document.getElementById("password").value;
    let name = document.getElementById("name").value;
    let error = document.getElementById("passwordError");

    if (password.length < 8 || password.toLowerCase() === "password" || password === name) {
        error.innerText = "Password is not strong";
        return false;
    } else {
        error.innerText = "";
        return true;
    }
}

// Validate Confirm Password
function validateConfirmPassword() {
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirmPassword").value;
    let error = document.getElementById("confirmPasswordError");

    if (password !== confirm) {
        error.innerText = "Passwords do not match";
        return false;
    } else {
        error.innerText = "";
        return true;
    }
}

// Final Form Validation
function validateForm() {
    let nameValid = validateName();
    let emailValid = validateEmail();
    let phoneValid = validatePhone();
    let passwordValid = validatePassword();
    let confirmValid = validateConfirmPassword();

    if (nameValid && emailValid && phoneValid && passwordValid && confirmValid) {
        alert("Form submitted successfully!");
        return true;
    } else {
        alert("Please fix errors before submitting");
        return false;
    }
}