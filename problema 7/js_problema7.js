// Leyendo datos
var dRueda = prompt("Ingrese el diametro de la rueda (metros): ") // Diametro de rueda
var gRueda = prompt("Ingrese el grosor de la rueda (metros): ") // Grosor de rueda

if (dRueda > 1.4) { // Cuando el diamtro sea mayor a 1.4
    alert("La rueda es para un carro grande")
    if (gRueda < 0.4) { // Pero su grosor inferior a 0.4
        alert("El grosor de la rueda no cumple con el estándar recomendado")
    }
} else if (dRueda > 0.8) { // Cuando el diametro oscile entre 0.8 y 1.4
    alert("La rueda es para un carro mediano")
    if (gRueda < 0.25) { // Pero el grosor sea inferior a 0.25
        alert("El grosor de la rueda no cumple con el estándar recomendado")
    }
} else { // Cuando el diametro sea inferior a 0.8
    alert("La rueda es para un carro pequeño")
}