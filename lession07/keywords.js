/*
  FUNCIONES CONSTRUCTORAS EN JAVASCRIPT

  Una función constructora permite crear objetos que comparten la misma estructura.
  Se utiliza con la palabra clave `new`, que crea un nuevo objeto y lo enlaza con `this`.
*/

// Ejemplo de función constructora 
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;

  this.saludar = function () {
    console.log("Hola, mi nombre es " + this.nombre + " y tengo " + this.edad + " años.");
  };
}

// Crear objetos usando `new`
const persona1 = new Persona("Lucas", 25);
const persona2 = new Persona("Ana", 30);

persona1.saludar(); 
persona2.saludar(); 


// Función fábrica: alternativa sin usar `new` 
function crearPersona(nombre, edad) {
  return {
    nombre: nombre,
    edad: edad,
    saludar: function () {
      console.log("Hola, soy " + nombre + " y tengo " + edad + " años.");
    }
  };
}

const persona3 = crearPersona("Carlos", 22);
persona3.saludar(); // Hola, soy Carlos y tengo 22 años.

/*
  RETO

  Crea una función constructora llamada Libro que reciba título y autor como parámetros.
  Debe tener un método llamado describir que imprima:
  "El libro [título] fue escrito por [autor]".

*/


function Libro(titulo, autor) {
  this.titulo = titulo;
  this.autor = autor;

  this.describir = function () {
    console.log("El libro " + this.titulo + " fue escrito por " + this.autor + ".");
  };
}

const libro1 = new Libro("Cien años de soledad", "Gabriel García Márquez");
libro1.describir(); 

// Desde ES6 se suele preferir clases para esto


/*
  LA PALABRA CLAVE RETURN EN JAVASCRIPT

  `return` se usa dentro de una función para devolver un valor y terminar la ejecución.
  Todo lo que venga después de `return` no se ejecuta.
*/

// Ejemplo básico
function sumar() {
  return 2 + 2;
}

console.log(sumar());        // 4
console.log(sumar() + 1);    // 5

// Sin valor devuelve undefined
function sinValor() {
  return;
}

console.log(sinValor());     // undefined

// Código después de return no se ejecuta
function ejemplo() {
  return true;
  console.log("No se muestra");
}

console.log(ejemplo());      // true

// Uso con condicional
function verificar(valor) {
  if (valor === undefined) return "Sin dato";
  return "Con dato";
}

console.log(verificar());         // "Sin dato"
console.log(verificar("Hola"));  // "Con dato"

// Función flecha con retorno implícito
const flecha = () => 2 + 2;
console.log(flecha());       // 4

// Si usas llaves, return es obligatorio
const flecha2 = () => { return 2 + 2 };
console.log(flecha2());      // 4

/*
  RETO

  Crea una función `esPar` que retorne true si un número es par, false si es impar.
*/

// Función tradicional
function esPar(n) {
  return n % 2 === 0;
}

// Flecha
const esParFlecha = n => n % 2 === 0;

console.log(esPar(4));        // true
console.log(esParFlecha(3));  // false

/*
  LA PALABRA CLAVE `this` EN JAVASCRIPT

  `this` hace referencia al objeto que "posee" la ejecución actual de la función.
  Su valor depende de **cómo** se llama la función, no de **dónde** está definida.
*/

// 1. EN EL CONTEXTO GLOBAL (modo no estricto)
console.log(this); // En navegador: Window

// 2. COMO MÉTODO DE UN OBJETO (Vinculación implícita)
const persona = {
  nombre: "Lucas",
  saludar() {
    console.log("Hola, soy " + this.nombre);
  }
};

persona.saludar(); // "Hola, soy Lucas"

// 3. EN FUNCIONES FLECHA (heredan el `this` del entorno donde se crean)
const objeto = {
  nombre: "Ana",
  saludar: () => {
    console.log("Hola, soy " + this.nombre);
  }
};

objeto.saludar(); // "Hola, soy undefined" (hereda `this` global)

// 4. CON CONSTRUCTORES (Vinculación con `new`)
function Animal(nombre) {
  this.nombre = nombre;
}

const gato = new Animal("Michi");
console.log(gato.nombre); // "Michi"

// 5. CON `call()`, `apply()` y `bind()` (Vinculación explícita)
function mostrarNombre() {
  console.log(this.nombre);
}

const persona4 = { nombre: "Carlos" };

mostrarNombre.call(persona4); // "Carlos"
mostrarNombre.apply(persona4); // "Carlos"

const mostrar = mostrarNombre.bind(persona4);
mostrar(); // "Carlos"

/* 6. EN EVENTOS
const boton = document.querySelector("button");

boton.addEventListener("click", function () {
  console.log(this); // `this` es el botón
});

boton.addEventListener("click", () => {
  console.log(this); // `this` es el objeto global (Window)
});

  RETO

  Crea un objeto coche con una propiedad marca y un método mostrarMarca 
  que imprima "La marca del coche es [marca]". Usa `this` correctamente.
*/

const coche = {
  marca: "Toyota",
  mostrarMarca() {
    console.log("La marca del coche es " + this.marca);
  }
};

coche.mostrarMarca(); // "La marca del coche es Toyota"
