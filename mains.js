function convertCurrency() {
    // elementos de entrada
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;

    //array de objetos
    const exchangeRates = [
        { from: "USD", to: "EUR", rate: 0.85 },
        { from: "USD", to: "JPY", rate: 110.25 },
        { from: "EUR", to: "USD", rate: 1.18 },
        { from: "EUR", to: "JPY", rate: 129.71 },
        { from: "JPY", to: "USD", rate: 0.0091 },
        { from: "JPY", to: "EUR", rate: 0.0077 }
    ];

    const rateObj = exchangeRates.find(rate => rate.from === fromCurrency && rate.to === toCurrency);

    if (!rateObj) {
        document.getElementById("resultText").textContent = "Las tasas de cambio no están disponibles para estas divisas.";
    } else {
        const convertedAmount = amount * rateObj.rate;
        document.getElementById("resultText").textContent = `${amount.toFixed(2)} ${fromCurrency} equivale a ${convertedAmount.toFixed(2)} ${toCurrency}.`;
    }

    //resultado
    document.getElementById("result").style.display = "block";
}



