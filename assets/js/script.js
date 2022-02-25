// variables for available characters for password
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var specialChar = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";

// Assignment code here
var generatePassword = function () {
  // set variable to blank so that whenever user clicks the button, it resets and makes password to their requirements
  var passLength = "";
  var passCriteria = "";
  var passwordFinal = "";
  passLength = firstQuestion();
  passCriteria = passwordCriteria();
  // to print final password
  for (var i = 0; i < passLength; i++) {
    passwordFinal += passCriteria.charAt(Math.floor(Math.random()*passCriteria.length));
  }
  return passwordFinal;
}

// function to ask password length
var firstQuestion = function () {
  var passwordLength = window.prompt("How many characters for password? Please pick between 8 and 128.");
  passwordLength = parseInt(passwordLength);
  if (isNaN (passwordLength) || passwordLength === "" || passwordLength === null || passwordLength < 8 || passwordLength > 128) {
    window.alert("You need to provide a valid answer!");
    return firstQuestion();
  }
  return passwordLength;
};

// function to ask users what character types they want
var passwordCriteria = function () {
  var charSet = "";
  var passwordLowerCase = window.confirm("Do you want lower case letters in your password?");
  if (passwordLowerCase) {
    charSet = charSet + lowerCase;
  }
  var passwordUpperCase = window.confirm("Do you want upper case letters in  your password?");
  if (passwordUpperCase) {
    charSet = charSet + upperCase;
  }
  var passwordNumbers = window.confirm("Do you want numbers in your password?");
  if (passwordNumbers) {
    charSet = charSet + numbers;
  }
  var passwordSpec = window.confirm("Do you want special characters in your password?");
  if (passwordSpec) {
    charSet = charSet + specialChar;
  }
  if (charSet === "") {
    window.alert("You need to select at least one character type!");
    return passwordCriteria();
  }
  return charSet;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
