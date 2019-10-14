//@flow

// Исправьте тип, чтобы функция принимала либо число, либо не принимала ничего (undefined). Можно внести только один символ
// После этого измените тип, чтобы он принимал число или undefined или null
function acceptNumberMayBe(value: number) {}
acceptNumberMayBe(5);
acceptNumberMayBe();
acceptNumberMayBe(null);
acceptNumberMayBe(undefined);

// Когда при описываем дефолтный параметр, то его тип изменяется. Опишите как он меняется. Ответ писать в конце файла.
function defaultValue(value: string = "default") {}
defaultValue();
defaultValue(null);
defaultValue("Not default");