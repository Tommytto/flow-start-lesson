//@flow

// Booleans
// Strings
// Numbers
// null
// undefined (void in Flow types)
// Symbols (new in ECMAScript 2015, not yet supported in Flow)

//boolean
let isOk: boolean;

isOk = 5;
isOk = true;
const test = new Boolean(5);

function start(canStart: boolean) {}
start(0);
start(!!0);
start(false);
start(Boolean(undefined));

//string
let name: string;
name = 5;
name = "John";

function acceptString(str: string) {}
acceptString(5);
acceptString("Hello world");
acceptString("1" + 5); // '15'
acceptString("1" - 5); // -4
acceptString("1" + {}); // '1[object Object]'
acceptString("1" + []); // '1'

//number
function acceptNumber(value: number) {}

acceptNumber(1);
acceptNumber(1.11);
acceptNumber(false);
acceptNumber(null);
acceptNumber(NaN);
acceptNumber(undefined);
acceptNumber(Infinity);

//null, void
function acceptNull(value: null) {}
acceptNull(null);
acceptNull(undefined);

// undefined === void
function acceptVoid(value: void) {}
acceptVoid(null);
acceptVoid(undefined);
acceptVoid();