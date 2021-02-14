/**
1. Write a range function that takes two arguments, start and end, and
returns an array containing all the numbers from start up to (and including) end.

2. Next, write a sum function that takes an array of numbers and returns
the sum of these numbers. Run the previous program and see whether
it does indeed return 55.

As a bonus assignment, modify your range function to take an optional
third argument that indicates the “step” value used to build up the
array. If no step is given, the array elements go up by increments of
one, corresponding to the old behavior. The function call range(1, 10, 2)
should return [1, 3, 5, 7, 9]. Make sure it also works with negative step
values so that range(5, 2, -1) produces [5, 4, 3, 2]
 */
function range(start, end, step = 1) {
  let result = [];
  if (start < end) {
    for (let i = start; i <= end; i += step) {
      result.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      result.push(i);
    }
  }
  return result;
}

const reducer = (accumulator, currentValue) => accumulator + currentValue;
function sum(array) {
  return array.reduce(reducer);
}

// expected [1, 3, 5, 7, 9]
// actual [3, 4, 5,  6, 7, 8, 9, 10]
const result = range(1, 10, 2);
console.log(result);

// expected [5, 4, 3, 2]
// actual
const res = range(5, 2, -1);
console.log(res);

// const start = 1;
// const end = 10;
// const result = range(start, end);
// const total = sum(result);
// console.log(total);

// console.log([...Array(10).keys()]);
// console.log(Array.from({ length: end }, (_, start) => start));
