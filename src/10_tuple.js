//@flow
let tuple1: [number] = [1];
let tuple2: [number, boolean] = [1, true];
let tuple3: [number, boolean, string] = [1, true, "three"];

let none = tuple1[3]; // Error!

let tuple: [number, boolean, string] = [1, true, "three"];

function getItem(n: number) {
  let val: number | boolean = tuple[n];
  // ...
}
getItem(4)

//tuple !== Array
// @flow
let array: Array<number>    = [1, 2];
// $ExpectError
let tuple10: [number, number] = array; // Error!


//Cannot use mutating array methods on tuples 
