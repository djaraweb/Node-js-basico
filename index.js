const math = require('./math');
const greet = require('./greetings/index');
const hello = require('./greetings/hello');

console.log(math.sumar(4,5));
console.log(math.restar(4,5));
console.log(math.multiplicar(4,5));
console.log(math.dividir(4,5));

console.log(greet.greet('Deyvi'));
console.log(hello.sayHello('Carlos'));


