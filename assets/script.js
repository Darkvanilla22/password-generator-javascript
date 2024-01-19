// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variables for character usage in password generation
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var characters = "!@#$%^&*()_-+=";

// Write password to the #password input
function generatePassword() {
  var length = +prompt("Enter password length (8-128):");
  if (length < 8 || length > 128) return alert("Enter a valid length (8-128).");

  var sets = [
    { name: "lowercase", characters: lowerCase },
    { name: "uppercase", characters: upperCase },
    { name: "numeric", characters: numbers },
    { name: "special", characters: characters }
  ];

  var selectedSets = sets.filter(set => confirm(`Include ${set.name} characters?`));

  if (selectedSets.length === 0) return alert("Select at least one character set.");

  var allChars = selectedSets.reduce((acc, set) => acc + set.characters, "");
  var password = Array.from({ length }, () => allChars[Math.floor(Math.random() * allChars.length)]).join("");
  return password;
}

function writePassword() {
  var password = generatePassword();
  document.querySelector("#password").value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
