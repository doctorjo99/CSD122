/*
  Christina Durr
  10/17/2019
  Assignment 3
*/

function sumDigits(num) {
  let ans = 0;
  while (num > 0) {
    ans += num % 10;
    num = num / 10;
  }
}
