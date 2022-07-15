// Assignment code here


// Get references to the #generate element
var generateBtn = document.getElementById("generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.getElementById("password");

  function generatePassword () {


    //prompt for password length
    let length = prompt("Please enter your password length");
    if (length>=8 && length<=128) {

    } else alert("Invalid password length");


  }


  passwordText.value = password;
  return;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
