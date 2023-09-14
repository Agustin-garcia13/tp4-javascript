const currencies = ["USD", "EUR", "JPY", "GBP", "CAD"];

document.addEventListener("DOMContentLoaded", function () {
    const fromCurrencySelect = document.getElementById("fromCurrency");
    const toCurrencySelect = document.getElementById("toCurrency");

    for (let i = 0; i < currencies.length; i++) {
        const option = document.createElement("option");
        option.value = currencies[i];
        option.textContent = currencies[i];
        fromCurrencySelect.appendChild(option);
    }

    for (let i = 0; i < currencies.length; i++) {
        const option = document.createElement("option");
        option.value = currencies[i];
        option.textContent = currencies[i];
        toCurrencySelect.appendChild(option);
    }

    const convertirBoton = document.querySelector("#convertirBoton");
    if (convertirBoton) {
        convertirBoton.addEventListener("click", convertCurrency);
    }
});

function convertCurrency() {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;

    if (amount <= 0) {
        Swal.fire("Por favor, ingresa una cantidad valida (no negativa).");
        return;
    }

    const customExchangeRates = {
        USD: {
            EUR: 0.85,
            JPY: 110.0,
        }
    };

    if (customExchangeRates[fromCurrency] && customExchangeRates[fromCurrency][toCurrency]) {
        const rate = customExchangeRates[fromCurrency][toCurrency];
        const convertedAmount = amount * rate;
        const resultMessage = `${amount.toFixed(2)} ${fromCurrency} equivale a ${convertedAmount.toFixed(2)} ${toCurrency} (Tasa de cambio personalizada).`;
        Swal.fire(resultMessage);
    } else {
        fetch(`https://open.er-api.com/v6/latest/${fromCurrency}`)
            .then(response => response.json())
            .then(data => {
                const rate = data.rates[toCurrency];
                const convertedAmount = amount * rate;
                const resultMessage = `${amount.toFixed(2)} ${fromCurrency} equivale a ${convertedAmount.toFixed(2)} ${toCurrency} (Tasa de cambio de la API).`;
                Swal.fire(resultMessage);
            })
            .catch(error => {
                console.error('Error:', error);
                Swal.fire('Ha ocurrido un error al obtener las tasas de cambio.');
            });
    }
}