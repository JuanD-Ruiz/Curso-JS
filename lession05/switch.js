/*

Reto switch...case
Crea un código que determine el día de la semana según el número ingresado (del 1 al 7). Los números representan los días de la semana de la siguiente manera:

1 = Lunes

2 = Martes

3 = Miércoles

4 = Jueves

5 = Viernes

6 = Sábado

7 = Domingo

Si el número es fuera de ese rango (menor que 1 o mayor que 7), debe imprimir: "Número no válido".

Usa switch...case para resolverlo.

*/

console.log("Reto 1 Switch Case")

let numDia = 8;

switch (numDia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;;
    case 3:
        console.log("Miercoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sabado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Número no válido");
        break;
}

/*

Reto con switch...case y calificación de notas
Imagina que tienes un sistema de calificaciones para una asignatura. Crea un programa que, usando switch...case, clasifique las notas de un estudiante según el siguiente criterio:

A (90-100) → "Excelente"

B (80-89) → "Bueno"

C (70-79) → "Suficiente"

D (60-69) → "Insuficiente"

F (0-59) → "Reprobado"

El código debe aceptar una nota y clasificarla en una de estas categorías. Si la nota es mayor a 100 o menor a 0, debe imprimir: "Nota no válida".

Pistas:

Puedes usar un switch para hacer la clasificación.

Utiliza el rango de la nota para clasificarla.



*/

console.log("Reto 2 Switch Case");

let nota = 70;

if (nota < 0 || nota > 100) {
    console.log("Nota no válida");
} else {
    switch (true) {
        case nota >= 90 && nota <= 100:
            console.log("Tu nota es A (Excelente)");
            break;
        case nota >= 80 && nota <= 89:
            console.log("Tu nota es B (Bueno)");
            break;
        case nota >= 70 && nota <= 79:
            console.log("Tu nota es C (Suficiente)");
            break;
        case nota >= 60 && nota <= 69:
            console.log("Tu nota es D (Insuficiente)");
            break;
        case nota >= 0 && nota <= 59:
            console.log("Tu nota es F (Reprobado)");
            break;
    }
}
