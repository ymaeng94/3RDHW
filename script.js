var lowerCaseCharacters = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["@","%","+","\\","/","'","!","#","$","^","?",":",",",")","(","}","{","]","[","~","-","_","."];


function getPasswordOptions() {
var length = parseInt(prompt("How many characters do you want to generate your password?"));

if(length < 8 || length > 128) {
  alert("Please type in a number between 8 and 128."); 
  return;
  }

if (isNaN(length) === true) {
  alert("Password length should be provided as a number");
  return;
  }


var confirmUpperCaseCharacters = confirm("Click OK if you want to contain uppercase characters.");
var confirmLowerCaseCharacters = confirm("Click OK if you want to contain lowercase characters.");
var confirmNumericCharacters = confirm("Click OK if you want to contain numeric characters.");
var confirmSpecialCharacters = confirm("Click OK if you want to contain special characters.");


if (!confirmSpecialCharacters && !confirmNumericCharacters && !confirmLowerCaseCharacters && !confirmUpperCaseCharacters) 
  {
    alert("Must select at least one criteria type");
    return;
  }

var passwordOptions = {
    length: length,
    confirmSpecialCharacters: confirmSpecialCharacters,
    confirmNumericCharacters: confirmNumericCharacters,
    confirmLowerCaseCharacters: confirmLowerCaseCharacters,
    confirmUpperCaseCharacters: confirmUpperCaseCharacters};
    return passwordOptions;}


function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randomChracter = arr[randIndex];
  return randomChracter;
}


function generatePassword() {
  var options = getPasswordOptions();
  var enter = [];
  var possibleCharacters = [];
  var guaranteedCharacters = [];


  if (options.confirmLowerCaseCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCaseCharacters);
    guaranteedCharacters.push(getRandom(lowerCaseCharacters));
  }
  if (options.confirmUpperCaseCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCaseCharacters);
    guaranteedCharacters.push(getRandom(upperCaseCharacters));
  }
  if (options.confirmSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }
  if (options.confirmNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  }
  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);
    enter.push(possibleCharacter);
  }
  for (var i = 0; i < guaranteedCharacters.length; i++) {
    enter[i] = guaranteedCharacters[i];
  }
  return enter.join("");
}


var generateBtn = document.getElementById("generate-password")
generateBtn.addEventListener("click", writePassword);

var btnCopy = document.querySelector("#copy");
btnCopy.addEventListener("click", copyPassword);

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  btnCopy.removeAttribute("disabled");
  btnCopy.focus();
}

function copyPassword() {
  document.getElementById("password").select();
  document.execCommand("Copy");
  alert("Password copied to clipboard!");
}





