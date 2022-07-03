var par = impar = 0 // Inicializando variables

// Recorriendo f:1->200
for(let i = 1; i <= 200; i++){ 
    if (i % 2 == 0) { 
        par += i // Sumando i cuando %2 = 0 => par
    } else {
        impar += i // Sumando i cuando %2 != 0 => impar
    }
}

// Salida de resultados por pantalla
alert("La suma de los numeros pares es: " + par)
alert("La suma de los numeros impares es: " + impar)