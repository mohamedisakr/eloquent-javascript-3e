/**
 Recursion
We’ve seen that % (the remainder operator) can be used to test whether
a number is even or odd by using % 2 to check whether it’s divisible by
two. 

Here’s another way to define whether a positive whole number is even or odd:
• Zero is even.
• One is odd.
• For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. 
The function should accept a number parameter and return a Boolean.
Test it on 50 and 75. See how it behaves on -1. Why? Can you think
of a way to fix this?
 */

function isEven(number) {
  let num = parseInt(number);
  if (num < 0) return;
  if (typeof num !== "number") return;
  if (isNaN(num)) return;
  if (num === 0) {
    return true;
  }
  if (num === 1) {
    return false;
  }
  return isEven(num - 2);
}

const evens = [2, 4, 6, 8, 10];
const odds = [3, 5, 7, 9];
const tests = [50, 75];
const edgeCases = ["", "12", "@#$"];
const negatives = [-1, -2, -3];

// evens.forEach((number) => {
//   console.log(`${number} : ${isEven(number) ? "even" : "odd"}`);
// });

// odds.forEach((number) => {
//   console.log(`${number} : ${isEven(number) ? "even" : "odd"}`);
// });

// tests.forEach((number) => {
//   console.log(`${number} : ${isEven(number) ? "even" : "odd"}`);
// });

// edgeCases.forEach((number) => {
//   console.log(`${number} : ${isEven(number) ? "even" : "odd"}`);
// });

negatives.forEach((number) => {
  console.log(`${number} : ${isEven(number) ? "even" : "odd"}`);
});
