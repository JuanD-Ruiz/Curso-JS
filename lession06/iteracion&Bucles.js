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
