// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Ask the user what should be the password length
  let pswLength = parseInt(prompt("Enter a psw length between 8 and 128"));
  //validate psw Length
  if ( pswLength < 8 || pswLength >  128 || Number.isNaN(pswLength) ){
    alert ( "password length has to be a number between 8 and 128 , please retry")
    return;
  }
  console.log ( "password Length = ",  pswLength);

  // Ask the user whether the user wants to include lowercase letters in password

  let haveLower = confirm ( "Press OK to include lowercase letters in the password, CANCEL otherwise");
  (haveLower) ? alert (" Your psw will include Lower case chars"): alert ("Your password will not have Lower case chars")

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
