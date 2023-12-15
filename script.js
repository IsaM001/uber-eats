"use strict";

// Defining variables
const form = document.querySelector("form");
const fullName = document.getElementById("Name");
const emailEl = document.getElementById("email");
const mobileEl = document.getElementById("mobile");
const passEl = document.getElementById("password");

// Event listener for form submission
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Preventing the default form submission behavior
  console.log("Form Checked");

  // Checking input values
  var checkFullName = checkName(fullName, "full name");
  var checkEmailResult = checkField(emailEl, "email");
  var checkMobileResult = checkMobile(mobileEl, "mobile");

  // Checking if all validation checks pass
  if (
    checkFullName === true &&
    checkEmailResult === true &&
    checkMobileResult === true
  ) {
    // Display the welcome message dynamically
    showWelcomeMessage(fullName.value, mobileEl.value);
  }
});

// Function to show a welcome message and redirect to another page
function showWelcomeMessage(name, mobile) {
  // Construct the URL for the redirect page with query parameters
  const redirectURL = `redirect.html?name=${encodeURIComponent(
    name
  )}&mobile=${encodeURIComponent(mobile)}`;

  // Redirect to the new page
  window.location.href = redirectURL;
}

// Function to check if the input contains only letters and spaces
function checkName(input, element) {
  let passes = false;

  // Regular expression to check if the input contains only letters and spaces
  const regEx = /^[a-zA-Z ]+$/; //the +$ includes the spaces

  if (regEx.test(input.value)) {
    console.log("Valid name");
    passes = true;
  } else {
    errorMessage(`Invalid ${element}`, element);
  }

  return passes;
}

// Function to check if the input field is not empty
function checkField(input, fieldName) {
  if (input.value.length > 0) {
    console.log(`${fieldName} is valid: ${input.value}`);
    return true;
  } else {
    errorMessage(`Invalid ${fieldName}`, fieldName);
    return false;
  }
}

// Function to check if the mobile number is in the format of + followed by a maximum of 15 digits
function checkMobile(input, element) {
  let passes = false;

  // Mobile number validation logic (format: + followed by a maximum of 15 digits)
  const regEx = /^\+\d{1,15}$/;

  if (regEx.test(input.value)) {
    console.log("Valid mobile number");
    passes = true;
  } else {
    errorMessage(`Invalid ${element}`, element);
  }

  return passes;
}

// Function to display an error message
function errorMessage(text, element) {
  console.log(`${element} message: ${text}`);
  alert(`${element}: ${text}`);
}
