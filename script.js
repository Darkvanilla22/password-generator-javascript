// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variables for character usage in password generation
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var characters = "!@#$%^&*()_-+=";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  document.querySelector("#password").value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
