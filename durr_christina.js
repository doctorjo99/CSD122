/*
 * Christina Durr
 * Assignment 4
 */

function cipher(plainText, shift_distance) {
  let cipherText = "";
  for(let i = 0; i <= plainText.length; i++) {
    let newLetter = plainText.charCodeAt(i);
    if ((newLetter < 123 && newLetter > 96) || (newLetter < 90 && newLetter > 64)) {
      newLetter += shift_distance;
      if (newLetter > 122 || (newLetter > 90 && newLetter < 96)) {
        newLetter -= 26;
      } else if (newLetter < 65 || (newLetter > 90 && newLetter < 96)) {
        newLetter += 26;
      }
    }
    cipherText += String.fromCharCode(newLetter);
  }
  return cipherText;
}

function decipher(encryptedText, shift_distance) {
  return cipher(encryptedText, (shift_distance * -1));
}
