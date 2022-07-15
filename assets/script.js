// Assignment code here


// Get references to the #generate element
var generateBtn = document.getElementById("generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.getElementById("password");

  function generatePassword () {
    let needLength = false;
    let length;
    let needLowerCase = false;
    let needUpperCase = false;
    let needNumber = false;
    let needSpecialChar = false;

    //confirm and input password length
    if (confirm("Require a certain length for password?")) {
      needLength = true;
      length = prompt("Please enter your password length");
      for (i=0; i<5; i++) {
        if (length>=8 && length<=128) { i=5
        } else {
        alert("Invalid password length");
        length = prompt("Please enter your password length");
        }
      }
    } else length = 1;

    //confirm and set upper/lower case, numeric and special characters
    if (confirm("Require lowercase letters in password?")) {
      needLowerCase = true;
    }
    if (confirm("Require uppercase letters in password?")) {
      needUpperCase = true;
    }
    if (confirm("Require numbers in password?")) {
      needNumber = true;
    }
    if (confirm("Require special charactors in password?")) {
      needSpecialChar = true;
    }

    //generate password based on criteria
    let lowerChar = "abcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let specialChar = "~!@#$%^&*()<>?{}[]\/"; //20 special chars
    
    for () {
      
    }

  }

  passwordText.value = password;
  return;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
