// Assignment code here


// Get references to the #generate element
var generateBtn = document.getElementById("generate");

// Write password to the #password input
function writePassword() {
  let password = '';
  generatePassword();
  
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
      length = prompt("Please enter your password length (8 - 128)");
      for (i=0; i<3; i++) {
        if (length>=8 && length<=128) { i=3
        } else {
        alert(`Password length must be between 8 and 128 charactors - ${3-i} more attempt(s) left`);
        length = prompt("Please enter your password length (8-128)");
        }
      }
    } 
    
    //if no input or input invalid, set length automatically
    if (!needLength || length<8 || length>128) {
      length = 12 + Math.floor(Math.random()*10);
      alert(`Password length automatically set: ${length}`);
    }

    //confirm and set upper/lower case, numeric and special characters
    for (i=0; i<3; i++) {
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

      if (!needLowerCase && !needUpperCase && !needNumber && !needSpecialChar && i<2) {
      alert(`Password must contain at least one of the these types - ${2-i} more attempt(s) left`);
      } else i=3; //check if at least one type is selected
    }
    
    if (!needLowerCase && !needUpperCase && !needNumber && !needSpecialChar) {
      alert("Password can not be generated")
      return;
    } //if no charactor requirement after 2 attempts, js will be terminated

    //console.log(needLowerCase, needUpperCase, needNumber, needSpecialChar);

    //generate password based on criteria

    let lowerChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']; //26 letters
    let upperChar = [];
    let numbers = ['0','1','2','3','4','5','6','7','8','9']; //10 numbers
    let specialChar = ['~','!','@','#','$','%','^','&','*','(',')','<','>','?']; //14 special characters
    let passwordBase = [];

    upperChar.length = lowerChar.length
    for (i=0; i<lowerChar.length; i++) {
      upperChar[i] = lowerChar[i].toUpperCase();
    }
/*
    let lowerChar = 'abcdefghijklmnopqrstuvwxyz'; //26 letters
    let upperChar = lowerChar.toUpperCase;
    let numbers = '0123456789'; //10 numbers
    let specialChar = '~!@#$%^&*()<>?'; //14 special characters
    let passwordBase;
*/
    
    if (needLowerCase) {
      passwordBase = lowerChar;
      password = password + lowerChar[Math.floor(Math.random() * lowerChar.length)];      
    } 
    if (needUpperCase) {
      passwordBase = passwordBase.concat(upperChar);
      password = password + upperChar[Math.floor(Math.random() * upperChar.length)];
    } 
    if (needNumber) {
      passwordBase = passwordBase.concat(numbers);
      password = password + numbers[Math.floor(Math.random() * numbers.length)];
    } 
    if (needSpecialChar) {
      passwordBase = passwordBase.concat(specialChar);
      password = password + specialChar[Math.floor(Math.random() * specialChar.length)];
    } 

    console.log(passwordBase, password); //check passwordbase
           
    for (i=password.length; i<length; i++) {
      password = password + passwordBase[Math.floor(Math.random() * passwordBase.length)];
    }
  }

  var passwordText = document.getElementById("password");
  passwordText.value = password;
  return;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
