let mytest = function (x, y) {
  return x + y;
}

let test2 = (x, y) => {
  return x * y;
}

(
  function (x, y) {
    console.log(x - y);
  }
)(5, 4);

function test(x) {
  return (y) => x - y;
}

let newtest = test(5);
console.log(newtest(3));

console.log(test2(3,4));
console.log(mytest(3,4));
console.log(0.1 + 02 == 0.3);
console.log(null == undefined);

var str = "This is a JavaScript string";

var res2 = str.substr(5,2);
console.log(res2);

let fruits = ["Apple", "Orange"];
for(item in fruits) {
  item = "reset";
}
console.log(fruits);
