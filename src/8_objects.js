// @flow

// Проанализируйте весь код снизу, исправьте ошибки и ответьте себе какие операторы(палочки, вопросики) когда применяются.

var obj1: { foo: boolean } = { foo: true };
var obj2: {
  foo: number,
  bar: boolean,
  baz: string
} = {
  foo: 1,
  bar: true,
  baz: "three"
};

var obj: { foo?: boolean } = {};

obj.foo = true;
// $ExpectError
obj.foo = "hello";

function acceptsObject(value: { foo?: string }) {
  // ...
}

acceptsObject({ foo: "bar" }); // Works!
acceptsObject({ foo: undefined }); // Works!
// $ExpectError
acceptsObject({ foo: null }); // Error!
acceptsObject({}); // Works!

// Object type inference
// sealed is strict
// unsealed when its empty initialized

var obj3 = {
  foo: 1,
  bar: true,
  baz: "three"
};

var foo: number = obj3.foo; // Works!
var bar: boolean = obj3.bar; // Works!
// $ExpectError
var baz: null = obj3.baz; // Error!
var bat: string = obj3.bat; // Error!

var obj4 = {
  foo: 1
};

// $ExpectError
obj4.bar = true; // Error!
// $ExpectError
obj4.baz = "three"; // Error!

var foo: {| foo: string |} = { foo: "Hello", bar: "World!" }; // Error!

type FooT = {| foo: string |};
type BarT = {| bar: number |};

type FooBarFailT = FooT & BarT;
type FooBarT = {| ...FooT, ...BarT |};

const fooBarFail: FooBarFailT = { foo: "123", bar: 12 }; // Error!
const fooBar: FooBarT = { foo: "123", bar: 12 }; // Works!

var obj5: {
  size: number,
  [id: number]: string
} = {
  size: 0
};

function add(id: number, name: string) {
  obj5[id] = name;
  obj5.size++;
}

//Object type
function method(obj: Object) {
  obj.foo = 42; // Works.
  let bar: boolean = obj.bar; // Works.
  obj.baz.bat.bam.bop; // Works.
}

method({ baz: 3.14, bar: "hello" });

// Приведите несколько примеров объектов
// 1. Инициализированный при объявлении объект
// 2. Инциализированный после объявления объект
// 3. Объект типа Object. (В чем разница между any и Object)
// 4. Объект со строгим интерфейсом. 
// Например где свойства могут быть только определенного вида. 
// Сделайте объект friendList, где ключами являются только строки, а значением объекты с типом User(его тоже сами опишите)
// 5. Объект, где может быть только 2 определенных свойства и никаких больше, совсем никак. А одно из этих свойств нельзя менять
// 6. Опишите Тип Car, опишите тип Plane. Опишите тип CarPlane, используя предыдущие типы. Какие есть способы и чем они отличаются друг от друга.