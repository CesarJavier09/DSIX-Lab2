//Capturando los datos de la persona #1
var nombre1 = prompt("Ingrese un nombre: ") 
var edad1 = prompt("Ingrese la edad de " + nombre1 + ":")

//Capturando los datos de la persona #2
var nombre2 = prompt("Ingrese el nombre de la siguiente persona: ") 
var edad2 = prompt("Ingrese la edad de " + nombre2 + ":")

//Por defecto la más longeva es la persona #1
var longevo = {edad: edad1, nombre: nombre1}

if (longevo.edad < edad2){ // si edad2 < edad1
    longevo.edad = edad2 
    longevo.nombre = nombre2
} 

alert(longevo.nombre + " es la persona más longeva con " + longevo.edad + " años.")