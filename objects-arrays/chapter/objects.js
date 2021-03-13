const obj1 = { name: "Peter", stats: { points: 45, isActive: false } };
const obj2 = { name: "Peter", stats: { points: 45, isActive: false } };
const obj3 = { name: "Peter" };

// console.log(obj1 === obj2); // returns false

isObjectEqual = (obj1, obj2) => {
  return (
    obj1.name === obj2.name &&
    obj1.stats.points === obj2.stats.points &&
    obj1.stats.isActive === obj2.stats.isActive
  );
};

shallowEquality = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
};

isObject = (obj) => {
  return obj !== null && typeof obj === "object";
};

areKeysEqual = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }
};

areObjectsEqual = (obj1, obj2) => {
  let keys1 = Object.keys(obj1);
  for (let key of keys1) {
    let val1 = obj1[key];
    let val2 = obj2[key];
    let areBothObjects = isObject(val1) && isObject(val2);
    if (
      (areBothObjects && !deepEquality(val1, val2)) ||
      (!areBothObjects && val1 !== val2)
    )
      return false;
  }
};

deepEquality = (obj1, obj2) => {
  const isEqual = areKeysEqual(obj1, obj2);
  if (isEqual === false) {
    return false;
  }

  const isObjectEqual = areObjectsEqual(obj1, obj2);
  if (isObjectEqual === false) {
    return false;
  }
  return true;
};

// const result = isObjectEqual(obj1, obj2);
// console.log(`obj1 = obj2 ? ${result}`);

// const result = shallowEquality(obj1, obj2);
// console.log(`Shallow equality for obj1 = obj2 ? ${result}`);

// const result = deepEquality(obj1, obj2);
// console.log(`Deep equality for obj1 = obj2 ? ${result}`);

// test isObject function
console.log(`obj1 is an object?: ${isObject(obj1)}`);
let stats = { points: 45, isActive: false };
console.log(`stats is an object?: ${isObject(stats)}`);

/*
var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

console.log(object1 == object2); // ! true
console.log(object1 == object3); // ! false

object1.value = 15;
console.log(object2.value); // ! 15
console.log(object3.value); // ! 10
*/

/*
var journal = [
  {
    events: [
      " work ",
      " touched tree ",
      " pizza ",
      " running ",
      " television ",
    ],
    squirrel: false,
  },
  {
    events: [
      " work ",
      "ice cream ",
      " cauliflower ",
      " lasagna ",
      " touched tree ",
      " brushed teeth ",
    ],
    squirrel: false,
  },
  {
    events: [" weekend ", " cycling ", " break ", " peanuts ", " beer "],
    squirrel: true,
  },
];

let result = journal.filter((item) => item.squirrel === true);
console.log(result);
*/

/*
let day1 = {
  squirrel: false,
  events: ["work", "touchedtree", "pizza", "running", "television"],
};

console.log(day1.squirrel);
console.log(day1.events);

day1.wolf = false;
console.log(day1.wolf);
console.log(day1);
*/
