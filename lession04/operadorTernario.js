let valor = 7;

let validar = valor < 3 ? "Es menor" : valor === 3 ? "Es igual" : "Es mayor" 

console.log(validar)

/* 

Reto ternario
Crea un código que evalúe la edad de una persona y devuelva el siguiente mensaje:

Si la edad es menor de 13 → "Niño"

Si la edad está entre 13 y 17 → "Adolescente"

Si tiene 18 o más → "Adulto"

*/

console.log("Reto ternario")

let edad = 174;

let verificarEdad = (edad < 13 
 ? "Niño" 
 : (edad >= 13 && edad <=17) 
  ? "Adolescente" 
  : "Adulto"
);

console.log(verificarEdad);