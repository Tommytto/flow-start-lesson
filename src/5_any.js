//@flow
const a: any = 'string';
a + 'fsf'

function acceptAny(value: any) {
    value + 'test';
    value + 5;
    value.helloWorld
}

// Почему стоит избегать any?
// Где any можем пригодиться?