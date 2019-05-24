//@flow
const arr: Array<number> = [1, 2, 3];
const arr2: number[] = [1, 2, 3];
//may be
const arr3: ?(number[]) = null;
const arr4: ?(number[]) = [null];

const arr5: (?number)[] = null;
const arr6: (?number)[] = [null];

//array access is unsafe
let array: Array<number> = [0, 1, 2];
let value: number = array[3];

//decision
let array2: Array<number> = [0, 1, 2];
let value2: number | void = array[1];

if (value !== undefined) {
  // number
}

//$ReadOnlyArray
const someArr: $ReadOnlyArray<string> = ["hello"];
someArr[1] = "world";

const someOperation = (arr: Array<number | string>) => {
  // Here we could do `arr.push('a string')`
};

const array3: Array<number> = [1];
someOperation(array3); // Error!
