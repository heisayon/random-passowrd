const lowercaseInput = document.getElementById("Lowercase");
const uppercaseInput = document.getElementById("Uppercase");
const numberInput = document.getElementById("Number");
const symbolsInput = document.getElementById("Symbol");
const sumbitBtn = document.getElementById("Enter");
let length = document.getElementById("passwordLength");
const screen = document.getElementById("screen");
sumbitBtn.onclick = function () {
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "123456789";
  const symbols = "!$@£^&()_+-=/|}{#~:;,¬`-";
  let allowedCharacters = "";
  let password = "";

  let newLength = length.value;
  if (lowercaseInput.checked) {
    allowedCharacters += lowerCase;
  }
  if (uppercaseInput.checked) {
    allowedCharacters += upperCase;
  }
  if (numberInput.checked) {
    allowedCharacters += numbers;
  }
  if (symbolsInput.checked) {
    allowedCharacters += symbols;
  }
  if (isNaN(newLength)) {
    screen.textContent = `Enter a Valid Number`;
  }
  if (newLength <= 0) {
    screen.textContent = `Please Select a Number from 1 and above`;
  }
  for (i = allowedCharacters.length - 1; i > 0; i--) {
    const shuffle = Math.floor(Math.random() * (i + 1));
    [allowedCharacters[i], allowedCharacters[shuffle]] = [
      allowedCharacters[shuffle],
      allowedCharacters[i],
    ];
  }
  if (allowedCharacters.length === 0) {
    screen.textContent = `Select at least one item`;
  } else {
    for (let index = 0; index < newLength; index++) {
      const randomPassword = Math.floor(
        Math.random() * allowedCharacters.length
      );
      password += allowedCharacters[randomPassword];
      console.log(randomPassword);
      console.log(allowedCharacters[0]);
      screen.textContent = `Your Password is ${password}`;
    }
  }
};
