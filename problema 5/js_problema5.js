//Lectura de número a operar
var num = prompt("Factorial de un número\nIngrese un número para calcular:")

// Definición e inicalización de variables
var resultado
var factorial = num
resultado = 1 // Inicializando en 1 para evitar error en línea 11

//Mientras factor > 1
while (factorial > 1) {
    resultado *= factorial // Multiplicando el producto de los factores por el siguiente factor
    factorial-- // Definiendo siguiente factor a iterar
}

//Salida de resultado por panatlla 
alert("El factorial de " + num + " es: " + resultado)
