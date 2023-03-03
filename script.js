// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Ask the user what should be the password length and var
  let genPsw = "";
  let validChars = "";
  let lcSet = "abcdefghijklmnopqrstuvwxyz";
  let ucSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numSet = "0123456789"
  let symbolsSet = " !@#$%^&*()_+}{<>?"


  let pswLength = parseInt(prompt("Your password between 8-126 characters"));
  //validate psw Length
  if ( pswLength < 8 || pswLength >  128 || Number.isNaN(pswLength) ){
    alert ( "The password length has to be a number between 8 and 128 , please retry")
    return;
  }
  console.log ( "password Length = ",  pswLength);

  // allow the user to pick between different type of characters 

  let haveLower = confirm ( "Press OK to include lowercase letters, press CANCEL otherwise");
  (haveLower) ? alert (" Your upcoming password will include Lower case characters"): alert ("Your password will not contained lowercase characters")
  if ( haveLower) {
    validChars += lcSet;
  }
  console.log  ( "validChars = ", validChars);

  let haveUpper = confirm ( "Press OK to include UPPER CASE LETTERS in the password, press CANCEL otherwise");
  (haveUpper) ? alert ("Your upcoming password will include UPPER CASE characters"): alert ("Your password will not have UPPER CASE characters")
  if ( haveUpper) {
    validChars += ucSet;
  }
  console.log  ( "validChars = ", validChars);

  let haveNumb = confirm ( "Press OK to include NUMBERS in the password, press CANCEL otherwise");
  (haveNumb) ? alert ("Your upcoming password will include NUMERIC characters"): alert ("Your password will not contain NUMERIC characters")
  if ( haveNumb) {
    validChars += numSet;
  }
  console.log  ( "validChars = ", validChars);

  let haveSymbols = confirm ( "Press OK to include SYMBOLS CHARACTERS in the password, CANCEL otherwise");
  (haveSymbols) ? alert (" Your psw will include SYMBOLIC characters"): alert ("Your password will not contain any symbols")
  if ( haveSymbols) {
    validChars += symbolsSet;
  }
  console.log  ( "validChars = ", validChars);
// final part of the function, its canceled if the character selection < 0
  if (validChars < 1) {
    alert ("you must P1cK aT l3a$T 1!");
    return;
  }

// loop and random math code to generate certain quantity of character based on user selection.

let randomIndex = 0;
let randomChar = "";
for (let i=0; i <pswLength ; i++){
  randomIndex = Math.floor ( Math.random() * validChars.length);
  randomChar = validChars[randomIndex];
  genPsw += randomChar;
}
//Returning to password generator
return genPsw;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
