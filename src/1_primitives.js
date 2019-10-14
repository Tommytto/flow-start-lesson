//@flow

// Booleans
// Strings
// Numbers
// null
// undefined (void in Flow types)
// Symbols (new in ECMAScript 2015, not yet supported in Flow)

const isLoading: string = false;

const isOpen: boolean = new Boolean(4);

function start(canStart: boolean) {}

// Укажи еще 3 примера вызова функции, обязательно разные
start(true);
start(false);
start(0);

// -------------
const name: number = "John";

function doSomething(str: string) {}

// Укажи еще 3 примера вызова функции, обязательно разные
doSomething("Hello world");


// Внесите изменения в код, чтобы следующие примеры заработали. Существующий код нельзя удалять.
doSomething("1" + {});
doSomething("1" + []);

// -------------

const age: string = 18;

function acceptNumber(value: number) {}

// Укажите еще 2 примеры использования, не используя цифра
acceptNumber(1);
acceptNumber(1.11);

// Внесите изменения в код, чтобы следующий примеры перестали быть ошибочными. Существующий код нельзя удалять.
acceptNumber(false);
acceptNumber(null);
acceptNumber(undefined);

// ----------
function acceptNull(value: null) {}
acceptNull(null);

// Исправьте тип, чтобы следующий пример заработал без ошибок. Слово undefined использовать нельзя
function acceptUndefined(value: null) {}

acceptUndefined(undefined);