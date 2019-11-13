/*
  Christina Durr
  11/12/2019
  Bonus Assignment 2
*/

function isPalindrome(str) {
  if (str < 3) {
    return str.charAt(0) == str.charAt(str.length - 1);
  }
  return str.charAt(0) == str.charAt(str.length - 1) && isPalindrome(str.slice(1, -1));
}
