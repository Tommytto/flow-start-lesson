//@flow

// Изучите примеры и исправьте типы
let tuple1: [number] = [1];
let tuple2: [string, boolean] = [1, true];
let tuple3: [number, boolean] = [1, true, "three"];

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


// Приведите свои примеры
// 1. Набор из 2 строк и одной цифры
// 2. Пример функции которая будет работать с набором
// 3. Пример из реальной жизни, который можно типизировать как набор
