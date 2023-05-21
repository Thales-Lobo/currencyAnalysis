// ...

const currencies = [
  { code: "BRL", name: "Real" },
  { code: "EUR", name: "Euro" },
  { code: "USD", name: "Dólar" },
];

class CurrencyConverter {
  // ...

  private populateCurrencySelects(): void {
    const fromCurrencySelect = document.getElementById("fromCurrency") as HTMLSelectElement;
    const toCurrencySelect = document.getElementById("toCurrency") as HTMLSelectElement;
    const chartCurrencySelect = document.getElementById("chartCurrency") as HTMLSelectElement;

    currencies.forEach((currency) => {
      const option = document.createElement("option");
      option.value = currency.code;
      option.text = `${currency.code} - ${currency.name}`;

      fromCurrencySelect.appendChild(option);
      toCurrencySelect.appendChild(option.cloneNode(true));
      chartCurrencySelect.appendChild(option.cloneNode(true));
    });
  }

  // ...
}

// ...
