
const rates = {
  UAH: 0.11,   
  KRW: 0.0029,
  CNY: 0.56,   
  JPY: 0.027, 
  BRL: 0.80    
};

function roundTwoDecimals(amount) {
  return Math.round(amount * 100) / 100;
}

exports.toPLN = function (amount, currency) {
  if (!rates[currency]) throw new Error("Nieznana waluta: " + currency);
  return roundTwoDecimals(amount * rates[currency]);
};

exports.fromPLN = function (amount, currency) {
  if (!rates[currency]) throw new Error("Nieznana waluta: " + currency);
  return roundTwoDecimals(amount / rates[currency]);
};

exports.rates = rates;
