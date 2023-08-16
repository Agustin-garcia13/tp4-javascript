/*
while (true) {
    convertCurrency();

    const restart = confirm("¿Deseas realizar otra conversión?");
    if (!restart) {
        alert("¡Gracias por usar el conversor de divisas!");
        break; // Sal del bucle si el usuario no desea reiniciar
    }
}

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
        if (!currencies.includes(fromCurrency)) {
            alert("Divisa de origen no válida. Por favor, elige una opción válida.");
        }
    } while (!currencies.includes(fromCurrency));

    do {
        toCurrency = promptMenu("Elige la divisa de destino:", currencies);
        if (!currencies.includes(toCurrency)) {
            alert("Divisa de destino no válida. Por favor, elige una opción válida.");
        }
    } while (!currencies.includes(toCurrency));

    // Resto del código para realizar la conversión y mostrar el resultado

    // Ejemplo de cálculo de la conversión basado en tasas de cambio (array de objetos)
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
        alert("Las tasas de cambio no están disponibles para estas divisas.");
        return;
    }

    const convertedAmount = amount * rateObj.rate;
    alert(`${amount.toFixed(2)} ${fromCurrency} equivale a ${convertedAmount.toFixed(2)} ${toCurrency}.`);
}

function promptMenu(message, options) {
    const userInput = prompt(`${message}\n${options.map((option, index) => `${index + 1}. ${option}`).join("\n")}`);
    const selectedOption = parseInt(userInput);
    
    if (!isNaN(selectedOption)) {
        return options[selectedOption - 1];
    } else {
        return null;
    }
}*/