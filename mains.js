 //array de objetos
 const exchangeRates = [
    { from: "USD", to: "EUR", rate: 0.85 },
    { from: "USD", to: "JPY", rate: 110.25 },
    { from: "EUR", to: "USD", rate: 1.18 },
    { from: "EUR", to: "JPY", rate: 129.71 },
    { from: "JPY", to: "USD", rate: 0.0091 },
    { from: "JPY", to: "EUR", rate: 0.0077 }
];
function convertCurrency() {
    // elementos de entrada
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;

    if (amount <= 0) {
        Swal.fire("Por favor, ingresa una cantidad valida (no negativa).");
        return;  
    }

   

    const rateObj = exchangeRates.find(rate => rate.from === fromCurrency && rate.to === toCurrency);

    if (!rateObj) {
        Swal.fire("Las tasas de cambio no estan disponibles para estas divisas")
    } else {
        const convertedAmount = amount * rateObj.rate;
        const resultMessage = `${amount.toFixed(2)} ${fromCurrency} equivale a ${convertedAmount.toFixed(2)} ${toCurrency}.`;    
        Swal.fire(resultMessage);
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const convertirBoton = document.querySelector("#convertirBoton");
    if (convertirBoton) {
        convertirBoton.addEventListener("click", convertCurrency);
    }
});



