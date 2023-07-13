// Función para verificar si un número es par o impar
function verificarParidad(numero) {
  if (numero % 2 === 0) {
    console.log(numero + " es un número par.");
  } else {
    console.log(numero + " es un número impar.");
  }
}

// Función para calcular la suma de los números del 1 al n
function calcularSuma(n) {
  let suma = 0;
  let i = 1;

  while (i <= n) {
    suma += i;
    i++;
  }

  console.log("La suma de los números del 1 al " + n + " es: " + suma);
}

// Llamada a las funciones
verificarParidad(7);    // Ejemplo de uso de la función verificarParidad
calcularSuma(10);       // Ejemplo de uso de la función calcularSuma