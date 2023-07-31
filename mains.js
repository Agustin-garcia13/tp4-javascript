function convertCurrency() {
  const amountStr = prompt("Ingresa la cantidad:");
  const amount = parseFloat(amountStr);

  if (isNaN(amount)) {
      alert("Ingresa una cantidad válida.");
      return;
  }

  const currencies = ["USD", "EUR", "JPY"]; 

  let fromCurrency;
  let toCurrency;

  do {
      fromCurrency = promptMenu("Elige la divisa de origen:", currencies);
  } while (!fromCurrency);

  do {
      toCurrency = promptMenu("Elige la divisa de destino:", currencies);
  } while (!toCurrency);

  // Tasas de cambio fijas 
  const exchangeRates = {
      USD: { EUR: 0.85, JPY: 110.25 },
      EUR: { USD: 1.18, JPY: 129.71 },
      JPY: { USD: 0.0091, EUR: 0.0077 }
  };

  if (fromCurrency === toCurrency) {
      alert("Las divisas de origen y destino son iguales. No es necesario convertir.");
      return;
  }

  if (!exchangeRates[fromCurrency] || !exchangeRates[fromCurrency][toCurrency]) {
      alert("Las tasas de cambio no están disponibles para estas divisas.");
      return;
  }

  const convertedAmount = amount * exchangeRates[fromCurrency][toCurrency];
  alert(`${amount.toFixed(2)} ${fromCurrency} equivale a ${convertedAmount.toFixed(2)} ${toCurrency}.`);
}

function promptMenu(message, options) {
  const userInput = prompt(`${message}\n${options.map((option, index) => `${index + 1}. ${option}`).join("\n")}`);
  const selectedOption = parseInt(userInput);
  switch (selectedOption) {
      case 1:
          return options[0];
      case 2:
          return options[1];
      case 3:
          return options[2];
      default:
          return null;
  }
}

// Llama a la función para iniciar la conversión cuando se ejecute el programa
convertCurrency();
