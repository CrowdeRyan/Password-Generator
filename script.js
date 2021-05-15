// The Password generator will provide a password with 8-128 characters based on criteria the user specifies.

// Character choice Arrays
var numberCase = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCase = [
  "!",
  "%",
  "&",
  ",",
  "*",
  "+",
  "-",
  ".",
  "/",
  "<",
  ">",
  "?",
  "~",
];
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Defined password construction function
function generatePassword() {
  var confirmLength = prompt(
    "How many characters would you like your password to contain? 8-128"
  );

  // Loop to ensure correct number
  while (confirmLength <= 7 || confirmLength >= 129) {
    alert("Please pick a numberCase between 8-128");
    var confirmLength = prompt(
      "How many characters would you like your password to contain?"
    );
  }

  // Selection of character types
  var confirmSpecialCase = confirm("Would like to include special characters?");
  var confirmNumberCase = confirm("Would like to include numbers?");
  var confirmLowerCase = confirm("Would like to include lowercase letters?");
  var confirmUpperCase = confirm("Would like to include uppercase letters?");

  // Loop if answer is outside the parameters
  while (
    confirmUpperCase === false &&
    confirmLowerCase === false &&
    confirmSpecialCase === false &&
    confirmNumberCase === false
  ) {
    alert("You must choose at least one parameter");
    var confirmSpecialCase = confirm(
      "Click OK to confirm if you would like to include special characters"
    );
    var confirmNumberCase = confirm(
      "Click OK to confirm if you would like to include numbers"
    );
    var confirmLowerCase = confirm(
      "Click OK to confirm if you would like to include lowercase letter"
    );
    var confirmUpperCase = confirm(
      "Click OK to confirm if you would like to include uppercase letters"
    );
  }

  // Conscatenation of possible characters selection
  var passwordCharacters = [];

  if (confirmSpecialCase) {
    passwordCharacters = passwordCharacters.concat(specialCase);
  }

  if (confirmNumberCase) {
    passwordCharacters = passwordCharacters.concat(numberCase);
  }

  if (confirmLowerCase) {
    passwordCharacters = passwordCharacters.concat(lowerCase);
  }

  if (confirmUpperCase) {
    passwordCharacters = passwordCharacters.concat(upperCase);
  }

  console.log(passwordCharacters);

  // Final password output
  var randomPassword = "";

  for (var i = 0; i < confirmLength; i++) {
    randomPassword =
      randomPassword +
      passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword);
  }
  return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Assignment Code + Event Listener to prompt questions when button pushed
document.querySelector("#generate").addEventListener("click", writePassword);
