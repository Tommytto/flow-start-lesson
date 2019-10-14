//@flow

function double(value: number): number {
  return value * 2;
}

function concat(a, b) {
  return a + b;
}

concat("hello", "it's me");
// concat(true, {});

// better set types for all
concat(1, 2);

// Опишите словами эту функцию вместе с типами
const arrowFunc = (value: number, ...rest: Array<mixed>): void => {};

// Измените код, чтобы исправить ошибку
function acceptFunc(callback: string => void) {
  callback(5);
}

// Измените возвращаемый тип, чтобы избавиться от ошибки
function randomNotZero(): boolean {
  if (Math.random()) {
    return true;
  }
}

// Измените возвращаемый тип, чтобы избавиться от ошибки
function setTimer(time): string {
  return new Promise(resolve => {
    resolve("Success");
  });
}

function method() {
  return this;
}

var num: number = method.call("42");

function concatStrings(a: ?string, b: ?string): string {
  if (a && b) {
    return a + b;
  }
  return "";
}

// Проанализируйте следующий код и скажите для чего необходим оператор %checks
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

// Допишите 4 примера. 2 с ошибкой и 2 без ошибки
testFunc(4);
testFunc("hello");
testFunc([]);

// Напишите 3 разные функции и типизируйте их. Обязательно сделать одну из них с необязательными параметрами