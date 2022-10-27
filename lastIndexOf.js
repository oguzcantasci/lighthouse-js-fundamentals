function lastIndexOf(array, value) {
  let out = -1
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      out = i
    } 
  }
  return out;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1));
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2));
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3));
console.log(lastIndexOf([ 5, 5, 5 ], 5));
console.log(lastIndexOf([], 3));