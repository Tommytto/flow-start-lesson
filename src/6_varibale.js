//@flow

// 1. var and let and const different for js
// 2. var, let and const different for flow
// 3. reassigning variables without type
// 4. can calculate type of variable

var someVar: number = 5;
let someLet: string = "hello"
const someConst: boolean = true;

someVar = 6;
someLet = "world"
someConst = false;

let letWithNoType = 5;
if (Math.random()) {letWithNoType = "test"}
if (Math.random()) {letWithNoType = true}

const againConst: number = letWithNoType;

//can't calculate
let foo = 42;

function mutate() {
  foo = true;
  foo = "hello";
}
mutate();
let isString: string = foo; 