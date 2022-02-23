// Assignment code here
var generatePassword = function () {
  var passwordPrompt = firstQuestion();
  console.log(passwordPrompt);
  return passwordPrompt;
}

// function to ask password length
var firstQuestion = function () {
  var passwordLength = window.prompt("How many characters for password? (8-128)");
  passwordLength = parseInt(passwordLength);
  if (isNaN (passwordLength) || passwordLength === "" || passwordLength === null || passwordLength < 8 || passwordLength > 128) {
    window.alert("You need to provide a valid answer!")
    return firstQuestion();
  }

  // if (passwordLength === "" || passwordLength === null) {
    // window.alert("You need to provide a valid answer!");
    // return firstQuestion();
  //}

  //if (passwordLength < 8 || passwordLength > 128) {
    //window.alert("You need to provide a valid answer!");
    //return firstQuestion();
  //}

  return passwordLength;
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
