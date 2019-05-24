//@flow
//left allows all except 'null'
//right allows all.
//default is equal left

//May be types
function acceptNumberMayBe(value?: number) {}
acceptNumberMayBe(5);
acceptNumberMayBe();
acceptNumberMayBe(null);
acceptNumberMayBe(undefined);

//May be
function defaultValue(value: string = "default") {}
defaultValue();
defaultValue(null);
defaultValue("Not default");