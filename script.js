// Testing push
    // writePassword();
    var includeLowerCaseEL = "";
    var includeUpperCaseEL = "";
    var includeNumbersEL = ""; 
    var includeSymbolsEL = "";

var upperCaseCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCaseCharacters =  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numericCharacters = [1,2,3,4,5,6,7,8,9,0];
var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~" ];


function randomize(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randIndex];

  return randomElement;
}

function makePassword() {
  var length = parseInt(
    prompt('How many characters would you like your password to contain?')
  );
  if (isNaN(length) === true) {
    alert('Password length must be provided as a number');
    return;
  }
  if (length < 8) {
    alert('Password length must be at least 8 characters');
    return;
  }
  
 if (length > 128) {
    alert('Password length must less than 129 characters');
    return; 
  };

var hasLowerCaseCharacters = confirm(
    'Click OK to confirm including lower case.'
  );

  var hasUpperCaseCharacters = confirm(
    'Click OK to confirm including upper case.'
  );

  var hasNumericCharacters = confirm(
    'Click OK to confirm including numbers.'
  );

  var hasSpecialCharacters = confirm(
    'Click OK to confirm including special characters.'
  );

  var passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowerCaseCharacters: hasLowerCaseCharacters,
    hasUpperCaseCharacters: hasUpperCaseCharacters
  };
  return passwordOptions;
}

function generatePassword() {
  var options = makePassword()
  var result = [];
var possibleCharacters = [];
var guaranteedCharacters = [];
if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(randomize(specialCharacters));
  }
  if (options.hasNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(randomize(numericCharacters));
  }
 
  if (options.hasLowerCaseCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCaseCharacters);
    guaranteedCharacters.push(randomize(lowerCaseCharacters));
  }
  
  if (options.hasUpperCaseCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCaseCharacters);
    guaranteedCharacters.push(randomize(upperCaseCharacters));
  }
  
  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = randomize(possibleCharacters);
    result.push(possibleCharacter);
  }
  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }
  return result.join('');
}

var generateBtn = document.querySelector('#generate');
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}
generateBtn.addEventListener('click', writePassword);





















      /*function generatePassword (characterAmountEL) {
        var charCodes = []
          var LOWERCASE_CHAR_CODES = "";
          var UPPERCASE_CHAR_CODES = "";
          var NUMBER_CHAR_CODES = "";
          var SYMBOLS_CHAR_CODES = "";
          if (includeLowerCaseEL) charCodes = charCodes.concat(LOWERCASE_CHAR_CODES)
          if (includeUpperCaseEL) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
          if (includeNumbersEL) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
          if (includeSymbolsEL) charCodes = charCodes.concat(SYMBOLS_CHAR_CODES)
      //error
        var passwordCharacters = []
      for (var i=0; i < characterAmountEL; i++) {
      var characterCode = charCodes[Math.floor(Math.random() * characterAmountEL.length)]
       passwordCharacters.push(String.fromCharCode(characterCode))
      }
      console.log(passwordCharacters)
          return passwordCharacters.join('')

      

function arrayFormLowToHigh(low, high) {
      var array = []
       for (var i = low; i <= high; i++) {
      array.push(i)
      }
      return array
      }; */
     

  //var characterAmountEL = prompt("How long do you want your password? (8-128 characters)")
//   if (characterAmountEL >128 || characterAmountEL <8){
//     alert("Please choose between 8 and 128 characters")
//     return }
//     else {
//         includeLowerCaseEL = prompt("Click 'ok' to include lowercase letters")
//         includeUpperCaseEL = confirm("Click 'ok' to include uppercase letters")
//         includeNumbersEL = confirm("Click 'ok' to include numbers")
//         includeSymbolsEL = confirm("Click 'ok' to include symbols")
//     }
//     if (includeLowerCaseEL != true && includeUpperCaseEL != true && includeNumbersEL != true && includeSymbolsEL != true ) {
//          alert("You must select at least one type of character to continue.") 
//     } else {
//         generatePassword(characterAmountEL)
//     }
//     return generatePassword(characterAmountEL)
// }

    //function to generate pw from user input
    //uppercase char not defined

 

  //generatebtn not defined
      
//var generateBtn = document.querySelector("#generate");

 //     generateBtn.addEventListener("click", writePassword);
      //generate pw in textarea

//prompts show, but no password appears in box


/*console.log("test");
function generate() {
}


var selectUpperCase
var selectLowerCase;
var selectNumber;
var selectSpecialCharacter;



var generateBtn = document.querySelector("#generate");
let result = document.querySelector

function writePassword() {
    console.log("password function working")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

var confirmLength;

/*while(confirmLength <=7 || confirmLength >= 129)
    alert("password length must be between 8-29 characters") 
function getRandomUpperCase(){
  return String.fromCharCode(Math.floor(Math.random()*26)+65);
 };
 function getRandomLowerCase(){
  return String.fromCharCode(Math.floor(Math.random()*26)+97);
};
function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random()*10)+48);
};

function getRandomSymbol(){
  var symbol = "!@#$%^&*(){}[]=<>/,.|~?";
  return symbol[Math.floor(Math.random()*symbol.length)];
};

function generatePassword() {
    var password =""
var length = parseInt(prompt("What length would you like for the password?"));

var wantUpperCase = prompt("Do you want uppercase letters?");
/* if wantUpperCase{ *
};

var useLowers = prompt("Do you want to use lowercase letters?");

if (useLowers) {
 password += getRandomLowerCase();
};

var useNumbers = prompt("Do you want to use numbers?");

if (useNumbers) {
 password += getRandomNumbers();
};

var useSymbols = prompt("Do you want to use symbols?");

if (useNumbers) {
 password += getRandomSymbols();
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var generateBtn = document.querySelector("#generate");
var passwordText = document.getElementById("#password");
/*create variables to store password option arrays 
var selectUpperCase
var selectLowerCase;
var selectNumber;
var selectSpecialCharacter; *
/*UpperCase ["A","B","C"];
Lower*Case ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
selectNumber [1,2,3,4,5,6,7,8,9,0];
// SpecialCharacter ["!", "#", "$", "%", "&",]; */

// function writePassword() {
//     console.log("password function working")
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
//   passwordText.value = password
