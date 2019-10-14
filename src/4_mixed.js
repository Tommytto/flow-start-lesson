//@flow

// Исправьте ошибки, код можно менять только внутри функции.
function setSomething(value: mixed) {
    const a = value + 'hello'
    const a = value.map((item) => item)
    delete value.someProp;
}

setSomething(true);
setSomething(234);
setSomething("hello world");
setSomething({ prop: "some props" });
