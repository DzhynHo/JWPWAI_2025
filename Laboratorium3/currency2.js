
class Currency {
  constructor() {
    this.rates = {
      UAH: 0.11,
      KRW: 0.0029,
      CNY: 0.56,
      JPY: 0.027,
      BRL: 0.80
    };
  }

  roundTwoDecimals(amount) {
    return Math.round(amount * 100) / 100;
  }

  toPLN(amount, currency) {
    if (!this.rates[currency]) throw new Error("Nieznana waluta: " + currency);
    return this.roundTwoDecimals(amount * this.rates[currency]);
  }

  fromPLN(amount, currency) {
    if (!this.rates[currency]) throw new Error("Nieznana waluta: " + currency);
    return this.roundTwoDecimals(amount / this.rates[currency]);
  }
}

module.exports = Currency;
