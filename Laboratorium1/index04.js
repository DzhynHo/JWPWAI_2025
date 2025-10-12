// npm_module_simple_strings.js

const {
  removeDiacritics,
  makeUrlSafe,
  simpleSearchTermIndex
} = require('@simplyhexagonal/simple-strings');

// Wyświetlenie opisu modułu
console.log("Moduł @simplyhexagonal/simple-strings — do normalizacji tekstu: usuwanie diakrytyków, tworzenie URL-safe tekstów i inne.");

// Testowe ciągi znaków
const str1 = "¿¡Árvíztűrő tükörfúrógép!?";
const str2 = "Zażółć gęślą jaźń";

// Pokazanie oryginałów
console.log("Oryginał 1:", str1);
console.log("Oryginał 2:", str2);

// Zastosowanie removeDiacritics
const noDiacritics1 = removeDiacritics(str1);
const noDiacritics2 = removeDiacritics(str2);
console.log("removeDiacritics 1:", noDiacritics1);
console.log("removeDiacritics 2:", noDiacritics2);

// Zastosowanie makeUrlSafe
const urlSafe1 = makeUrlSafe(str1);
const urlSafe2 = makeUrlSafe(str2);
console.log("makeUrlSafe 1:", urlSafe1);
console.log("makeUrlSafe 2:", urlSafe2);

// Zastosowanie simpleSearchTermIndex
const searchNorm = simpleSearchTermIndex('Zażółć +test, minus -gęślą');
console.log("simpleSearchTermIndex:", searchNorm);
