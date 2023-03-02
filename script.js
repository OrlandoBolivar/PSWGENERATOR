// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Ask the user what should be the password length
  let genPsw = "";
  let validChars = "";
  let lcSet = "abcdefghijklmnopqrstuvwxyz";
  let ucSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//TODO: efine variables for  numbers  and symbols

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
  if ( haveLower) {
    validChars += lcSet;
  }
  console.log  ( "validChars = ", validChars);

// TODo the same handling for upper case

// TODo  the  same  handling for  numbers

// TODo the same handling for symbols

// TODO: See if ateleast one  char type is chosen, if not , return with an alert saing atleast one char type should be selected for 
// password to be generated

// You need to generated one random characcter out of the all the valid characers inn a loop, add that character to genPsw and keep 
//repeating it for pswLength times

let randomIndex = 0;
let randomChar = "";
for (let i=0; i <pswLength ; i++){
  randomIndex = Math.floor ( Math.random() * validChars.length);
  randomChar = validChars[randomIndex];
  genPsw += randomChar;
}
//Finallly return the genPsw which holds the generatedpassword
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
