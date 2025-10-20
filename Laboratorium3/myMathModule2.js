

class MyMathModule {
  constructor() {
    console.log("Obiekt klasy MyMathModule został utworzony!");
  }

  dodaj(a, b) {
    return a + b;
  }

  odejmij(a, b) {
    return a - b;
  }

  pomnóż(a, b) {
    return a * b;
  }

  podziel(a, b) {
    if (b === 0) throw new Error("Nie można dzielić przez zero!");
    return a / b;
  }

  potęga(a, b) {
    return Math.pow(a, b);
  }
}

module.exports = MyMathModule;
