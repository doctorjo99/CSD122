function remove_array_element(arr, check) {
  let newArr = [];
  for(let x of arr) {
    if ( x != check) {
      newArr.push(x);
    }
  }
  return newArr;
}

console.log(remove_array_element([2, 5, 9, 6], 5));

var library = [
   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
   ];

function search(str) {
  for(let book of library) {
    if(book.author.localeCompare(str) == 0) {
      return book;
    }
  }
}

console.log(search('Bill Gates'));

function sortArray(arr) {
  let newArr = [arr[0]];
  for(let i = 1; i < arr.length; i ++){
    for(let j = 0; j < newArr.length; j++) {
      if(newArr[j].title.localeCompare(arr[i].title) == 1) {
        newArr.splice(j,0,arr[i]);
        break;
      }
    }
    newArr.push(arr[i]);
  }
  return newArr;
}

let arr = sortArray(library)
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
