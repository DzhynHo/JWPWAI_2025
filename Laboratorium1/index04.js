// npm_module_simple_strings.js

const {
  removeDiacritics,
  makeUrlSafe,
  simpleSearchTermIndex
} = require('@simplyhexagonal/simple-strings');

// Вывод описания модуля
console.log("Модуль @simplyhexagonal/simple-strings — для нормализации строк: удаление диакритики, создание URL-safe строк и др.");

// Тестовые строки
const str1 = "¿¡Árvíztűrő tükörfúrógép!?";
const str2 = "Zażółć gęślą jaźń";

// Показать оригиналы
console.log("Оригинал 1:", str1);
console.log("Оригинал 2:", str2);

// Применяем removeDiacritics
const noDiacritics1 = removeDiacritics(str1);
const noDiacritics2 = removeDiacritics(str2);
console.log("removeDiacritics 1:", noDiacritics1);
console.log("removeDiacritics 2:", noDiacritics2);

// Применяем makeUrlSafe
const urlSafe1 = makeUrlSafe(str1);
const urlSafe2 = makeUrlSafe(str2);
console.log("makeUrlSafe 1:", urlSafe1);
console.log("makeUrlSafe 2:", urlSafe2);

// Применяем simpleSearchTermIndex
const searchNorm = simpleSearchTermIndex('Zażółć +test, minus -gęślą');
console.log("simpleSearchTermIndex:", searchNorm);
