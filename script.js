// Assignment Code
var generateBtn = document.querySelector("#generate");

//Arrays for generating random password
const lowerAlphabet = ["a", 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
                       'n', 'o', 'p','q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
                       'N', 'O', 'P','Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const specialCharacters = [" ", "! ", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",",
                           "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", 
                           "_", "`", "{", "|", "}", "~", "\\"];
//array that stores all characters being pulled from the above data
const pswrd = [];

//Generates the password by answering a series of prompts and confirms
function generatePassword() {

  var passwordText = document.querySelector("#password");
  //Password Length
  var passwordLength = prompt(`How long would you like to make your password?`);

  //Checks if user input text instead of a number value
  if (isNaN(passwordLength)) {

    alert('Please enter only numbers in the text box');
    generatePassword();
  
  }

  
    if ((passwordLength < 8) || (passwordLength > 128)) {

      alert(`Please enter a number between 8 and 128`);
      generatePassword();
      } else {
        alert(`Your password will be ${passwordLength} characters long.`);
      }

  //Lowercase Requirement
  var passwordLowerCase = confirm(`Do you want to include lowercase letters?`);

    if (passwordLowerCase) {

        alert(`Your password will include lowercase letters`);
      } else {
        alert(`Your password will NOT include lowercase letters`);
      }
  
  //Uppercase requirement
  var passwordUpperCase = confirm(`Do you want to include upper case letters?`);

    if (passwordUpperCase) {
      
        alert(`Your password will include uppercase letters`); 
      } else {
        alert(`Your password will NOT include uppercase letters`);
      }

  //Number requirement
  var passwordNumbers = confirm(`Do you want to include numbers?`);

    if (passwordNumbers) {
      
        alert(`Your password will include numbers`);
      } else {
        alert(`Your password will NOT include numbers`);
      }

  //Special characters requirement
  var passwordSpecialChar = confirm(`Do you want to incluce special characters?`);

    if (passwordSpecialChar) {
      
        alert(`Your password will include special characters`);
      } else {
        alert(`Your password will NOT include special characters`);
      }

  if ((passwordLowerCase == false) &&
      (passwordUpperCase == false) &&
      (passwordNumbers == false) &&
      (passwordSpecialChar == false)) {

        return alert(`You must include at least one type of special character`);

      }



  /*Built a for loop to randomly pull characters from arrays to generate password*/
  for (let i = 0; i <= passwordLength; i++) {
    
    //conditional that checks if any criteria was chosen
    if (passwordLowerCase || passwordUpperCase || passwordNumbers || passwordSpecialChar) {
    
      //adds lowercase if true
      if (passwordLowerCase) {
      pswrd.push(lowerAlphabet[Math.floor(Math.random() * lowerAlphabet.length)]);
      i++;
      }

      //adds uppercase if true
      if (passwordUpperCase) {
      pswrd.push(upperAlphabet[Math.floor(Math.random() * upperAlphabet.length)]);
      i++;
      }
      
      //adds numbers if true
      if (passwordNumbers) {
      pswrd.push(Math.floor(Math.random() * 9));
      i++;
      }

      //adds special characters if true
      if (passwordSpecialChar) {
      pswrd.push(specialCharacters[Math.floor(Math.random() * specialCharacters.length)]);
      i++;
      }

    }
  }

  //Takes all values from pswrd array and joins them together as a string and prints inside password box
  passwordText.innerHTML = pswrd.join('');

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);