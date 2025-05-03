//Tipo de datos en consola con typeof

console.log("Tipo de dato");
let numero = 10; // number
console.log(typeof numero);
let cadena = "Hola"; // string
console.log(typeof cadena);
let booleano = true; // boolean
console.log(typeof booleano);
let nulo = null; // null, utilizando typeof me arroja object debido a un error del lenjuaje, pero su tipo de dato es primitivo, null.
console.log(typeof nulo);
let indefinido; // undefined
console.log(typeof indefinido);
let simbolo = Symbol("mi simbolo"); // symbol
console.log(typeof simbolo);
let objeto = { nombre: "Juan", edad: 20 }; // object
console.log(typeof objeto);