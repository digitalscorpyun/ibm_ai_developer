// #script_discipline: password_validator.js - Password Validation Logic
// For IBM AI Developer Certificate - Enhancing JavaScript Skills Lab - Exercise 3

const samplePasswords = [
    "Password123", "short", "LoooooooooongPassword12345",
    "NoSpecialChars!", "N0$ymbolsHere", "onlylowercase",
    "ONLYUPPERCASE", "12345678", "AlphaNum", "ValidPass1"
];

function isValidPassword(password) {
    if (typeof password !== 'string') return false;
    if (password.length < 8 || password.length > 20) return false;
    const alphanumericRegex = /^[a-zA-Z0-9]+$/;
    if (!alphanumericRegex.test(password)) return false;
    return true;
}

function validatePasswords(passwordsArray) {
    console.log("--- Password Validation Ritual Results (IBM Lab Ex3) ---"); 
    passwordsArray.forEach(currentPassword => {
        const isValid = isValidPassword(currentPassword);
        const statusGlyph = isValid ? '🔑✅' : '🚫❌'; 
        console.log(`Password "${currentPassword}": ${statusGlyph} ${isValid ? 'Valid' : 'Invalid'}`);
    });
    console.log("--- Validation Ritual Complete ---");
}

validatePasswords(samplePasswords);