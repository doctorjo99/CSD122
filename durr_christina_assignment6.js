/*
  Christina Durr
  11/12/2019
  Assignment 6
*/

const readline = require('readline');
const readLineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask(questionText) {
    return new Promise((resolve, reject) => {
        readLineInterface.question(questionText, (input) => resolve(input));
    });
}

async function main() {
    var s1 = await ask('Enter a string of lower case characters.');
    console.log("Number of vowels: " + numOfVowels(s1));
    var s2 = await ask('Enter a string of lower case characters.');
    var keyword = await ask('Enter a seach keyword.');
    console.log("Number of times " + keyword + " occurs  is " + numOfKeyword(s2, keyword));
    process.exit();
}

function numOfVowels(s) {
  let count = 0;
  for(let i = 0; i < s.length; i++) {
    if(s.charAt(i) == 'a' || s.charAt(i) == 'e' || s.charAt(i) == 'i' || s.charAt(i) == 'o' || s.charAt(i) == 'u') {
      count++;
    }
  }
  return count;
}


function numOfKeyword(s, keyword) {
  let count = 0;
  while(s.indexOf(keyword) > -1) {
    count++
    s = s.slice(s.indexOf(keyword) + 1);
  }
  return count;
}

main();
