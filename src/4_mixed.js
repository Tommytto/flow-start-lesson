//@flow
//input all
//actions only with refinements
function setSomething(value: mixed) {
    if (typeof value === 'string') {
        const a = value + 'hello'
    } else if (Array.isArray(value)) {
        const a = value.map((item) => item)
    }

    delete value.someProp;
}

setSomething(true);
setSomething(234);
setSomething("hello world");
setSomething({ prop: "some props" });
