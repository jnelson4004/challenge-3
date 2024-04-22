// Assignment Code
var generateBtn = document.querySelector("#generate");

// A function to get the password
    function getPassword() {
    
// Password variables for allowable passwords characters
    var uppercaseABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var lowercaseABC = "abcdefghijklmnopqrstuvwxyz"
    var digits = "0123456789"
    var symbols = "!@#$%^&*()-=+<>?/|':[]{}"
    var multiSelect = "";
    var randomKey = "";

//Initial prompt to allow end-user to select a password length between 8 to 128 characters long.
    var keyLength = prompt(
        "choose length (8-128 characters)"
    );
    
// Return to window if the selected number is out of range for password criteria
    if (keyLength < 8 || keyLength > 128 || isNaN(keyLength)) {
        alert("try again nerd");        
        return;

// Variable Prompts. Once the end user successfully enters a valid numberor value, this prompt will notify them that their password will contain the following characters when the random key is finally generated
    } else {
    var uppercase = confirm("include uppercase");
    var lowercase = confirm("include lowercase");
    var numbers = confirm("include numbers");
    var characters = confirm("include symbols");
    }

    if (uppercase) {multiSelect += uppercaseABC;}
    if (lowercase) {multiSelect += lowercaseABC;}
    if (numbers) {multiSelect += digits;}
    if (characters) {multiSelect += symbols;}

// For loop to repeat if criteria is not met and will end once password is generated. 
    for (i = 0; i < keyLength; i++) {

// Final random password has generated
        randomKey += multiSelect[Math.floor(Math.random() * multiSelect.length)]
    }
    return(randomKey);
}

// Write password to the #password input. The text box area where the newly generated password will appear.
    var passwordText = document.querySelector("#password");
    function writePassword(randomKey) {
    if (password.length === 0) {
        return;
    }
    passwordText.value = randomKey;
};

// Add event listener to generate button. This is a Call To Action (CTA button)
    generateBtn.addEventListener("click", function () { writePassword(getPassword()) });

    