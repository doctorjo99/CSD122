/*
  Christina Durr
  10/2/2019
  Assignment 2
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
    var ten = await ask('Enter a base 10 number?');
    console.log(result(parseInt(ten, 10), ''));
    process.exit();
}

// converts a base ten number into a binary string
function result(ten, binary) {
  if (ten > 0) {
    if(ten % 2 == 0) {
      binary = "0" + binary;
    } else {
      binary = "1" + binary;
    }
    ten = Math.floor(ten / 2);
    return result(ten, binary);
  }
  return binary;
}

main();
