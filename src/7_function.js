//@flow

// 1. input and output
// 2. using inference, output type is often optional
// 3. syntax for arrow functions
// -- rest operator
// 4. function types (as parameter for example)
// 5. function return
// 6. function return Promise
// 7. function this
// 8. predicate functions
// 9. chained checks functions
// 10. callable objects
// 11. Function type

function double(value: number): number {
  return value * 2;
}

function concat(a, b) {
  return a + b;
}

concat("hello", "it's me");
concat(true, {});

// better set types for all
concat(1, 2);

const arrowFunc = (value: number, ...rest: Array<mixed>): void => {};

function acceptFunc(callback: string => void) {
  callback(5);
}

function voidOrBool(): boolean {
  if (Math.random()) {
    return true;
  }
}

function setTimer(time): string {
  return new Promise(resolve => {
    resolve("Success");
  });
}

function method() {
  return this;
}

var num: number = method.call(42);
// $ExpectError
var str: string = method.call(42);

function concatStrings(a: ?string, b: ?string): string {
  if (a && b) {
    return a + b;
  }
  return "";
}

//predicate body only as expression, no variables inside
function checkTruthy(a, b): boolean %checks {
  // const hello = 'hello';
  return Boolean(a) && Boolean(b);
  // return Boolean(a && b);
  // return !!a && !!b;
}

function concatStrings2(a: ?string, b: ?string): string {
  if (checkTruthy(a, b)) {
    return a + b;
  }
  return "";
}

function isString(val): %checks {
  return typeof val === "string";
}

function isNumber(val): %checks {
  return typeof val === "number";
  // return !isNaN(val);
}

function isNumberOrString(val): %checks {
  return isString(val) || isNumber(val);
}

function testFunc(val): string | number {
  if (isNumberOrString(val)) {
    return val;
  } else {
    return val.length;
  }
}

testFunc(4);
testFunc("hello");
testFunc([]);
testFunc({ hello: "world" });

// callable object
type CallableObj = {
  (number, number): number,
  bar: string
};

function add(x, y) {
  return x + y;
}

// $ExpectError
(add: CallableObj);

add.bar = "hello world";

(add: CallableObj);

const f: Function = (a, b, c) => {
    return a + b + c.delete;
}