/**
Write a function arrayToList that builds up a data structure like the
previous one when given [1, 2, 3] as argument, and write a listToArray
function that produces an array from a list. Also write the helper
functions prepend, which takes an element and a list and creates a new
list that adds the element to the front of the input list, and nth, which
takes a list and a number and returns the element at the given position
in the list, or undefined when there is no such element.
If you haven’t already, also write a recursive version of nth. 
*/
function arrayToList(array) {
  let list = {};
  array.forEach((item) => {
    // list["value"] = item;
    // list["rest"] = null;
    //
    // let child = { value: item, rest: null };
    // // Object.assign(list, child);
    // list = { ...list, child };
  });
  return list;

  // { '1': { '2': { '3': {} } } }
  // var json = {};
  // var current = json;
  // for (var i = 0; i < array.length; i++) {
  //   // current[array[i]] = {};
  //   // current = current[array[i]];
  //   current[array[i]] = {};
  //   current = current[array[i]];
  // }
  // console.log(json);
}

function listToArray(list) {
  const array = [];
  if (list.value && list.rest) {
    array.push(list.value);
  }
  while (list.rest !== null) {
    array.push(list.rest.value);
    list.rest = list.rest.rest;
  }
  return array;
}

const list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null,
    },
  },
};

const array = [1, 2, 3];
const result = arrayToList(array);
console.log(result);

// const result = listToArray(list);
// console.log(result);
