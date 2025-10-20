

const readline = require("readline");
const math1 = require("./myMathModule1");
const MyMathModule = require("./myMathModule2");
const math2 = new MyMathModule();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("=== PROSTY KALKULATOR MATEMATYCZNY ===");
console.log("Dostępne operacje: dodaj, odejmij, pomnóż, podziel, potęga");

rl.question("Podaj pierwszą liczbę: ", function(a) {
  rl.question("Podaj drugą liczbę: ", function(b) {
    rl.question("Wybierz operację: ", function(op) {
      a = parseFloat(a);
      b = parseFloat(b);

      try {
        console.log("\n--- Wersja 1 (exports) ---");
        console.log(`${op} → wynik:`, math1[op](a, b));

        console.log("\n--- Wersja 2 (klasa) ---");
        console.log(`${op} → wynik:`, math2[op](a, b));
      } catch (err) {
        console.error("Błąd:", err.message);
      }

      rl.close();
    });
  });
});

rl.on("close", function() {
  console.log("\nDo zobaczenia!");
  process.exit(0);
});
