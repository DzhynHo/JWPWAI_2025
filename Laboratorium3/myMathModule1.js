

function dodaj(a, b) {
  return a + b;
}

function odejmij(a, b) {
  return a - b;
}

function pomnóż(a, b) {
  return a * b;
}

function podziel(a, b) {
  if (b === 0) throw new Error("Nie można dzielić przez zero!");
  return a / b;
}

function potęga(a, b) {
  return Math.pow(a, b);
}

exports.dodaj = dodaj;
exports.odejmij = odejmij;
exports.pomnóż = pomnóż;
exports.podziel = podziel;
exports.potęga = potęga;
