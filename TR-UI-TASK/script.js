// script.js - Form validation and signup

function validateForm() {
  let isValid = true;

  // Clear previous errors
  document.getElementById("nameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("phoneError").innerText = "";

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();

  // Name validation
  const namePattern = /^[A-Za-z ]+$/;
  if (!namePattern.test(name)) {
    document.getElementById("nameError").innerText =
      "Name must contain only letters and spaces.";
    isValid = false;
  }

  // Email validation
  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").innerText =
      "Please enter a valid email.";
    isValid = false;
  }

  // Phone validation
  const phonePattern = /^[0-9]{10}$/;
  if (!phonePattern.test(phone)) {
    document.getElementById("phoneError").innerText =
      "Phone number must be 10 digits.";
    isValid = false;
  }

  // If all validations pass, log to console
  if (isValid) {
    console.log("Form submitted successfully:");
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Phone: " + phone);
  }

  return false; // Prevent actual form submission
}
