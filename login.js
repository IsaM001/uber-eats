"use strict";

const form = document.querySelector("form");
const emailEl = document.getElementById("email");
const passEl = document.getElementById("password");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Preventing the default form submission behavior
  console.log("Form Checked");

  // Checking input values
  var checkEmailResult = checkField(emailEl, "email");
  var checkPwdResult = checkPwd(passEl, "password");

  // Checking if all validation checks pass
  if (checkEmailResult === true && checkPwdResult === true) {
    // Redirect to welcomeback.html
    window.location.href = "welcomeback.html";
  }
});

// Function to check if the input field is not empty and is a valid email
function checkField(input, fieldName) {
  const value = input.value.trim(); // Trim to remove leading and trailing spaces

  if (value.length > 0) {
    // Check if the value is a valid email using a simple regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(value)) {
      console.log(`${fieldName} is valid: ${value}`);
      return true;
    } else {
      errorMessage(`Invalid ${fieldName}`, fieldName);
      return false;
    }
  } else {
    errorMessage(`Invalid ${fieldName}`, fieldName);
    return false;
  }
}

// Function to display an error message
function errorMessage(text, element) {
  console.log(`${element} message: ${text}`);
  alert(`${element}: ${text}`);
}

// Function to check if the password field is not empty
function checkPwd(input, element) {
  if (input.value.length > 0) {
    console.log(`${element} is valid`);
    return true;
  } else {
    errorMessage(`Invalid ${element}`, element);
    return false;
  }
}
