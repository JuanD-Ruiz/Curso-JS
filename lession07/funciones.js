saludar(); // Esto funciona

function saludar() {
  console.log("¡Hola!");
}

"use strict";
{
  function test() {
    console.log("Hola");
  }
}

// test();  ❌ Error: no está en el alcance global

/* 
❓ Parámetros con valores por defecto
Si no pasas un argumento, puedes dar un valor por defecto:
*/

function saludar(nombre = "invitado") {
  console.log(`Hola, ${nombre}`);
}

saludar();         // Hola, invitado
saludar("Carlos"); // Hola, Carlos

function mostrarArgs() {
  console.log(arguments);
}

mostrarArgs(1, 2, 3); // Muestra todos los valores

/*
Funciones variádicas (número variable de argumentos)
Antes se usaba arguments, pero hoy es más común el rest parameter (...):
*/

function juntar(separador, ...palabras) {
  console.log(palabras.join(separador));
}

juntar(" - ", "Hola", "cómo", "estás"); // Hola - cómo - estás

/*
🏹 Funciones flecha y ...rest
Las funciones flecha sí funcionan con ...rest, pero no con arguments.
*/

const miFuncion = (...args) => {
  console.log(args);
};

miFuncion(1, 2, 3); // [1, 2, 3]

/*
🧠 Reto práctico
Crea una función que reciba un número indeterminado de números y devuelva la suma total de todos ellos.

Requisitos:
Usa la sintaxis de función flecha.

Usa el rest parameter para aceptar múltiples argumentos.

Si no se pasa ningún argumento, devuelve 0.

Ejemplo esperado:

sumarNumeros(1, 2, 3, 4); // Resultado: 10
sumarNumeros();           // Resultado: 0
*/

const sumarNumeros = (...numero) => {
    if (numero.length === 0) {
        return console.log("Resultado: 0");
    } else {
        let total = 0;
        for (let num of numero) {
            total += num;
        }
        console.log(`La suma total es: ${total}`);
    }
};

sumarNumeros(1, 2, 3);
sumarNumeros(); 

