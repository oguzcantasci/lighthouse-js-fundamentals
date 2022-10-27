function concat(array1,array2) {
  let newArray = []
  newArray.push(...array1)
  newArray.push(...array2)
  return newArray;
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);

// let array1 = [1,2,3]
// let array2 = [4,5,6]

// array1.push(...array2)
// console.log(array1)
