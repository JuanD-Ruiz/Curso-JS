/*
Iteraciones y bucles

While
do while
for

*/

console.log("While")

/*

🧠 Reto: Adivina el número secreto
🟢 Descripción:
Crea un programa que:

Genere un número aleatorio entre 1 y 10 (ese será el número secreto).

Use un bucle while para que el usuario intente adivinarlo.

El programa debe:

Pedirle al usuario un número (usa prompt para simularlo).

Mostrar si el número es correcto o no.

Saltar la vuelta si el número ingresado es 0 usando continue (como si no contara).

Terminar si el usuario adivina correctamente usando break.

🧩 Reglas:
Usa Math.random() para generar el número.

Usa prompt() para obtener el número del usuario. (Si estás en un entorno sin navegador, puedes usar un array simulado de intentos para probarlo).

Muestra mensajes con console.log().

*/
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intento;
let contador = 0;

while (true) {
  intento = prompt("Adivina el número (1-10):");
  intento = Number(intento);

  if (intento === 0) {
    console.log("Entrada no válida, intenta de nuevo.");
    continue;
  }

  contador++; // Aumentamos el contador solo si el intento es válido (distinto de 0)

  if (intento === numeroSecreto) {
    console.log(`¡Adivinaste! El número secreto era ${numeroSecreto}.`);
    console.log(`Lo lograste en ${contador} intento(s).`);
    break;
  }

  console.log("Número incorrecto, intenta de nuevo.");
}

/* 

DO WHILE

🧩 Reto para ti
Haz un programa con do...while que:

Pida al usuario que escriba una contraseña (puedes simular esto con prompt si estás en navegador).

El ciclo debe repetirse hasta que el usuario escriba la contraseña correcta: "js123".

Cuando la contraseña sea correcta, debe mostrar un mensaje como: "¡Acceso concedido!".

*/
let contraseña;

do {
  contraseña = prompt("Ingresa tu contraseña");
} while (contraseña !== 'jquery');

console.log("¡Acceso concedido!")

/* 

🔐 Reto 2: Contraseña con intentos limitados
Haz un programa con do...while que:

Pida al usuario que escriba una contraseña (correcta = 'javascript123').

El usuario solo tendrá 3 intentos para adivinarla.

Si la escribe bien antes de los 3 intentos, muestra "¡Acceso concedido!".

Si falla las 3 veces, muestra "Acceso denegado. Demasiados intentos.".

*/

let entrada;
let contador1 = 0;

do {
  entrada = prompt("Ingresa la contraseña correcta");
  contador1++;

} while (entrada !== "Pescado" && contador1 < 3);
if (entrada === "Pescado"){
  console.log("¡Acceso concedido!")
} else {
  console.log("Acceso denegado. Demasiados intentos.")
}

/*

For

🎯 Reto

Reto básico:
Crea un bucle for que imprima los números del 1 al 10.

Reto intermedio:
Tienes el siguiente array:


Escribe un bucle for que imprima:

Fruta #1: manzana
Fruta #2: banana
Fruta #3: cereza
Fruta #4: kiwi

*/

for (let i = 0; i < 10; i++){
  console.log(i+1)
}

var frutas = ["manzana", "banana", "cereza", "kiwi"];

for (let index = 0; index < frutas.length; index++) {

  console.log(`Fruta #${index+1}: ${frutas[index]}`);
  
}

/*

for...of, for...in, forEach

🔁 Reto 1: for...of
🧩 Enunciado:
Tienes el siguiente array de nombres:

const nombres = ["Carlos", "Ana", "Luis", "Marta", "Jorge"];
👉 Crea un bucle for...of que recorra este array e imprima un mensaje como:

Hola, Carlos!
Hola, Ana!
...

*/
const nombres = ["Carlos", "Ana", "Luis", "Marta", "Jorge"];
for(const nombre of nombres ){
  console.log(`Hola, ${nombre}!`);
}
/*
🔁 Reto 2: for...in
🧩 Enunciado:
Tienes el siguiente objeto:


const persona = {
  nombre: "Laura",
  edad: 30,
  profesion: "Diseñadora"
};
👉 Usa un bucle for...in para recorrer las propiedades del objeto y mostrar esto en consola:

nombre: Laura
edad: 30
profesion: Diseñadora
Bonus: Usa Object.hasOwn() para asegurarte de que solo imprimes propiedades propias.
*/

const persona = {
  nombre: "Laura",
  edad: 30,
  profesion: "Diseñadora"
};

for(dato in persona){
  console.log(`${dato}: ${persona[dato]}`);
}

/*
🔁 Reto 3: forEach()
🧩 Enunciado:
Tienes un array de precios:

const precios = [10, 20, 30, 40];
👉 Usa forEach() para:

Mostrar cada precio en consola.

Calcular el total de la suma de todos los precios.

Mostrar el total al final.

📌 Salida esperada:

Precio: 10
Precio: 20
Precio: 30
Precio: 40
Total: 100

*/

const precios = [10, 20, 30, 40];
let total = 0;

precios.forEach((precio) => {
  console.log(`Pecio: ${precio}`);
  total += precio;
});

console.log(`Total: ${total}`);

/*

Iteradores

🎯 Reto: Crear un iterable personalizado para números impares del 1 al 9
Crea un objeto iterable (no una función generadora) que devuelva los números impares del 1 al 9 cuando se recorra con un bucle for...of.

✅ Requisitos:
Implementa el método [Symbol.iterator]() en un objeto llamado numImpares.

Dentro del método, crea un objeto iterador con la función next().

El método next() debe:

Devolver los números impares desde 1 hasta 9.

Indicar que ha terminado cuando el número supere el 9.

Recorre el iterable usando un bucle for...of y muestra cada valor en consola.

*/

const numImpares = {
  [Symbol.iterator](){
    let count = 1;
    return{
      next(){
        if (count < 10){
          const value = count;
          count += 2;
          return { value, done: false}
        } else {
          return {done: true}
        }
      }
    }
  }
}

for (const impar of numImpares){
  console.log(impar);
}

/*

JavaScript asincrono

Promesas

🧠 Reto: Simulador de consultas a servidores
Imagina que tienes que hacer una consulta a varios servidores (API ficticias) para obtener datos.
Algunos responden rápido, otros lento, y alguno puede fallar.

🎯 Objetivo:
Simula 5 servidores que responden en diferentes tiempos (1s a 4s).

Algunos deben responder con datos, otros con error (simulado).

Usa Promise.race() para mostrar el primer servidor que respondió, sin importar si fue éxito o error.

Luego usa Promise.any() para mostrar el primer servidor exitoso.

Al final, usa Promise.allSettled() para mostrar el resultado de todos los servidores.

*/

function consultaServidor(nombre, tiempo, exito){
  return new Promise((consulta, reject) => {
    console.log(`${nombre} se esta analizando...`);
    
    setTimeout(() => {
      if(exito){
        consulta(`${nombre}: primer servidor que se obtuvo datos de forma exitosa`)
      } else {
        reject(`${nombre}: primer servidor en conectar, sin encontrar datos`)
      }
    }, tiempo);
  });

}
const servidores = [
  consultaServidor("Servidor A", 4000, true),
  consultaServidor("Servidor B", 2000, false),  
  consultaServidor("Servidor C", 3000, true),   
  consultaServidor("Servidor D", 1000, false),  
  consultaServidor("Servidor E", 2500, true),   
]

async function promiseRace(){

  try {
    const resultado = await Promise.race(servidores);
    console.log(` Resultado (race): ${resultado}`);
  } catch (error) {
    console.error(`Primer error (race): ${error}`);
  }
}

async function promiseAny() {
  try {
    const resultado = await Promise.any(servidores);
    console.log(`Resultado (any): ${resultado}`)
  } catch (error) {
    console.error(`Primer error (any): ${error}`)
  }
  
}

async function promiseAllSettled() {
  const resultado = await Promise.allSettled(servidores);
  resultado.forEach((resultado, i) => {
    if (resultado.status == "fulfilled"){
      console.log(`Exito: ${resultado.value}`);
    } else {
      console.warn(`Fallo: ${resultado.reason}`);
    }
  });
}

await promiseRace();
await promiseAny();
await promiseAllSettled();