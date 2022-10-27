

function range(start,end,step) {
  let array = []
  while (start <= end && step > 0) {
    array.push(start)
    start = start + step
  }
  return array
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));