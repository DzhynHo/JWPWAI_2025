

const currency1 = require('./currency1');
const Currency = require('./currency2');
const currency2 = new Currency();

console.log("=== Wersja 1: exports ===");
console.log("100 UAH → PLN =", currency1.toPLN(100, 'UAH'));
console.log("10000 KRW → PLN =", currency1.toPLN(10000, 'KRW'));
console.log("50 CNY → PLN =", currency1.toPLN(50, 'CNY'));
console.log("5000 JPY → PLN =", currency1.toPLN(5000, 'JPY'));
console.log("100 BRL → PLN =", currency1.toPLN(100, 'BRL'));
console.log();

console.log("=== Wersja 2: obiektowe ===");
console.log("200 PLN → UAH =", currency2.fromPLN(200, 'UAH'));
console.log("300 PLN → KRW =", currency2.fromPLN(300, 'KRW'));
console.log("400 PLN → CNY =", currency2.fromPLN(400, 'CNY'));
console.log("500 PLN → JPY =", currency2.fromPLN(500, 'JPY'));
console.log("600 PLN → BRL =", currency2.fromPLN(600, 'BRL'));
